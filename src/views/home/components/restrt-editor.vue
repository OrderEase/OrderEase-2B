<style lang="less">
    @import '../../../styles/common.less';
    @import './styles/restrt-editor.less';
</style>

<template>
    <Modal v-model="syncEditting" :mask-closable="false" width="480" class="restrt-editor">
        <p slot="header">
            <Icon type="compose"></Icon>
            <span>编辑店铺</span>
        </p>
        <div class="restrt-editor-img-wrapper">
            <img :src="edittingRestrt.img" alt="" class="restrt-editor-img">
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
                class="restrt-editor-img-cover">
                <Icon type="camera" size="20" color="white"></Icon>
            </Upload>
        </div>
        <Form
            ref="restrtForm"
            :rules="ruleValidate"
            :model="edittingRestrt"
            :label-width="80"
            class="margin-top-30">
            <FormItem label="名称" prop="name">
                <Input
                    v-model="edittingRestrt.name"
                    placeholder="输入..."
                    :disabled="saveLoading"
                />
            </FormItem>
            <FormItem label="营业时间" prop="timeRange">
                <TimePicker
                    v-model="edittingRestrt.timeRange"
                    :disabled="saveLoading"
                    @on-change="timeRangeChanged"
                    format="HH:mm"
                    type="timerange"
                    placement="bottom-end"
                    placeholder="选择时间"
                    style="width: 168px"
                ></TimePicker>
            </FormItem>
            <FormItem label="描述">
                <Input
                    v-model="edittingRestrt.description"
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

export default {
    props: {
        editting: Boolean,
        restrt: Object
    },
    data () {
        return {
            syncEditting: this.editting,
            edittingRestrt: {},
            saveLoading: false,

            ruleValidate: {
                name: [
                    {
                        type: 'string',
                        required: true,
                        message: '店铺名称不能为空',
                        trigger: 'blur'
                    }
                ],
                timeRange: [
                    {
                        type: 'array',
                        len: 2,
                        required: true,
                        message: '请选择营业时间',
                        trigger: 'change'
                    },
                    {
                        validator (rule, value, callback, source, options) {
                            var errors = []
                            if (!value[0] || !value[1]) {
                                errors.push(new Error('请选择营业时间'))
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
            return process.env.BASE_URL + '/photos/restrt'
        }
    },
    watch: {
        editting (val) {
            this.syncEditting = val
        },
        syncEditting (val) {
            this.$emit('on-editting-change', val)
        },
        restrt (val) {
            this.edittingRestrt = Util.deepCopy(val)
            this.$set(this.edittingRestrt, 'timeRange', [this.edittingRestrt.open, this.edittingRestrt.close])
        }
    },
    methods: {
        timeRangeChanged (val) {
            this.edittingRestrt.open = val[0]
            this.edittingRestrt.close = val[1]
        },
        async save () {
            this.$refs['restrtForm'].validate(async valid => {
                if (valid) {
                    this.saveLoading = true
                    try {
                        let editedRestrt = Util.deepCopy(this.edittingRestrt)
                        delete editedRestrt.timeRange
                        await this.$store.dispatch('restaurant/update', editedRestrt)

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
            })
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: '图片大小超过限制',
                desc: '图片过大，请不要上传超过 2M 的图片'
            })
        },
        handleSuccess (res, file) {
            this.$Notice.success({
                title: '图片上传成功',
                desc: file.name + '上传成功'
            })
            this.edittingRestrt.img = res.url
        }
    }
}
</script>

