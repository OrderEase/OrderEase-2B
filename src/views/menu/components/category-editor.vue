<template>
    <Modal v-model="syncEditting" width="300">
        <p slot="header">
            <Icon type="edit"></Icon>
            <span>编辑类别</span>
        </p>

        <Form
            ref="categoryForm"
            :model="edittingCategory"
            :rules="ruleValidate"
            :label-width="80">
            <FormItem label="类别名称" prop="name">
                <Input
                    v-model="edittingCategory.name"
                    placeholder="输入..."
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
import Menu from '@/api/menu.js'

export default {
    props: {
        editting: Boolean,
        category: Object
    },
    data () {
        return {
            syncEditting: this.editting,
            edittingCategory: {},
            saveLoading: false,

            ruleValidate: {
                name: [
                    {
                        required: true,
                        message: '类别名称不能为空',
                        trigger: 'blur'
                    }
                ]
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
        category (val) {
            this.edittingCategory = util.deepCopy(val)
        }
    },
    methods: {
        async save () {
            this.$refs['categoryForm'].validate(async valid => {
                if (valid) {
                    this.saveLoading = true
                    try {
                        if (this.edittingCategory.id) {
                            await this.$store.dispatch('menu/updateCategory', this.edittingCategory)
                        } else {
                            await this.$store.dispatch('menu/createCategory', this.edittingCategory)
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
        }
    },
}
</script>

