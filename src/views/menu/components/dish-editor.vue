<style lang="less">
    @import '../../../styles/common.less';
    @import './dish-editor.less';
</style>

<template>
    <Modal v-model="syncEditting" :mask-closable="false" width="480" class="dish-editor">
        <p slot="header">
            <Icon type="edit"></Icon>
            <span>编辑菜品</span>
        </p>
        <div class="dish-editor-img-wrapper">
            <img :src="edittingDish.img" alt="" class="dish-editor-img">
            <Upload
                ref="upload"
                :show-upload-list="false"
                :max-size="2048"
                :format="['jpg','jpeg','png']"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :on-success="handleSuccess"
                :action="imgUploadsURL"
                :with-credentials="true"
                type="drag"
                class="dish-editor-img-cover">
                <Icon type="camera" size="20" color="white"></Icon>
            </Upload>
        </div>
        <Form
            ref="dishForm"
            :rules="ruleValidate"
            :model="edittingDish"
            :label-width="80"
            class="margin-top-30">
            <FormItem label="名称" prop="name">
                <Input
                    v-model="edittingDish.name"
                    placeholder="输入..."
                    :disabled="saveLoading"
                />
            </FormItem>
            <FormItem label="价格">
                <Row>
                    <i-col span="10">
                        <FormItem prop="price">
                            <InputNumber
                                v-model="edittingDish.price"
                                :min="0"
                                :disabled="saveLoading"
                            />
                        </FormItem>
                    </i-col>
                    <i-col span="4" class="dish-editor-stock-label">库存</i-col>
                    <i-col span="10">
                        <FormItem prop="stock">
                            <InputNumber
                                v-model="edittingDish.stock"
                                :min="0"
                                :precision="0"
                                :disabled="saveLoading"
                            />
                        </FormItem>
                    </i-col>
                </Row>
            </FormItem>
            <FormItem label="上架">
                <i-switch v-model="edittingDish.avaliable" size="large" :disabled="saveLoading">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </FormItem>
            <FormItem label="描述">
                <Input
                    v-model="edittingDish.description"
                    type="textarea"
                    placeholder="输入..."
                    :autosize="{minRows: 2,maxRows: 5}"
                    :disabled="saveLoading"
                />
            </FormItem>
        </Form>

        <div slot="footer">
            <Button
                type="success"
                size="large"
                long
                :loading="saveLoading"
                @click="save"
            >保存</Button>
        </div>
    </Modal>
</template>

<script>
import Util from '@/libs/util.js'
import { baseURL } from '@/api/config.js'

export default {
    props: {
        editting: Boolean,
        dish: Object,
        category: Object
    },
    data () {
        return {
            syncEditting: this.editting,
            edittingDish: {},
            saveLoading: false,

            ruleValidate: {
                name: [
                    {
                        type: 'string',
                        required: true,
                        message: '菜品名称不能为空',
                        trigger: 'blur'
                    }
                ],
                price: [
                    {
                        validator (rule, value, callback, source, options) {
                            var errors = []
                            let valueString = String(value)
                            let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
                            if (!reg.test(valueString)) {
                                errors.push(new Error('请输入正确金额'))
                            }
                            callback(errors)
                        }
                    }
                ]
            }
        }
    },
    computed: {
        imgUploadsURL () {
            return baseURL + '/photos/dish'
        }
    },
    watch: {
        editting (val) {
            this.syncEditting = val
        },
        syncEditting (val) {
            this.$emit('on-editting-change', val)
        },
        dish (val) {
            this.edittingDish = val
            this.edittingDish.avaliable = this.edittingDish.avaliable === 1
        }
    },
    methods: {
        async save () {
            this.$refs['dishForm'].validate(async valid => {
                if (valid) {
                    this.saveLoading = true
                    try {
                        let editedDish = Util.deepCopy(this.edittingDish)
                        editedDish.avaliable = editedDish.avaliable ? 1 : 0

                        if (editedDish.id) {
                            await this.$store.dispatch('menu/updateDish', {
                                dish: editedDish,
                                categoryId: this.category.id
                            })
                        } else {
                            await this.$store.dispatch('menu/createDish', {
                                dish: editedDish,
                                categoryId: this.category.id
                            })
                        }

                        this.saveLoading = false
                        this.$Message.success('保存成功')
                        this.syncEditting = false
                    } catch (err) {
                        this.saveLoading = false
                        this.$Message.error('保存失败')
                    }
                }
            })
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: '格式错误',
                desc: '文件格式不支持，请选择 jpg 或 png 格式图片'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: '图片大小超过限制',
                desc: '图片过大，请不要上传超过 2M 的图片'
            });
        },
        handleSuccess (res, file) {
            this.$Notice.success({
                title: '图片上传成功',
                desc: file.name + '上传成功'
            })
            this.edittingDish.img = res.url
        }
    }
}
</script>

