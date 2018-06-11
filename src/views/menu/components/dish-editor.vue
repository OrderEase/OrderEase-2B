<style lang="less">
    @import '../../../styles/common.less';
    @import './dish-editor.less';
</style>

<template>
    <Modal v-model="syncEditting" width="480" class="dish-editor">
        <p slot="header">
            <Icon type="edit"></Icon>
            <span>编辑菜品</span>
        </p>
        <div class="dish-editor-img-wrapper">
            <img :src="edittingDish.img" alt="" class="dish-editor-img">
        </div>
        <Form :model="edittingDish" :label-width="80" class="margin-top-30">
            <FormItem label="图片">
                <Input
                    v-model="edittingDish.img"
                    placeholder="输入..."
                    :disabled="saveLoading"
                />
            </FormItem>
            <FormItem label="名称">
                <Input
                    v-model="edittingDish.name"
                    placeholder="输入..."
                    :disabled="saveLoading"
                />
            </FormItem>
            <FormItem label="价格">
                <Row>
                    <i-col span="10">
                        <Input
                            v-model="edittingDish.price"
                            placeholder="输入..."
                            number
                            :disabled="saveLoading"
                        />
                    </i-col>
                    <i-col span="4" class="dish-editor-stock-label">库存</i-col>
                    <i-col span="10">
                        <Input
                            v-model="edittingDish.stock"
                            placeholder="输入..."
                            :number="true"
                            :disabled="saveLoading"
                        />
                    </i-col>
                </Row>
            </FormItem>
            <FormItem label="上架">
                <i-switch v-model="edittingDish.avaliable" size="large">
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
import util from '@/libs/util.js'

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
            saveLoading: false
        }
    },
    methods: {
        async save () {
            this.saveLoading = true
            try {
                let editedDish = util.deepCopy(this.edittingDish)
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
    },
    watch: {
        editting (val) {
            this.syncEditting = val
        },
        syncEditting (val) {
            this.$emit('on-editting-change', val)
        },
        dish (val) {
            this.edittingDish = util.deepCopy(val)
            this.edittingDish.avaliable = this.edittingDish.avaliable === 1
        }
    }
}
</script>

