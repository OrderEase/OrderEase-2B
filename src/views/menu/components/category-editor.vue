<template>
    <Modal v-model="syncEditting" width="260">
        <p slot="header">
            <Icon type="edit"></Icon>
            <span>编辑类别</span>
        </p>

        <Form :model="edittingCategory" :label-width="80">
            <FormItem label="类别名称">
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
            edittingCategory: this.createEmptyCategory(),
            saveLoading: false
        }
    },
    methods: {
        createEmptyCategory () {
            return {
                name: ''
            }
        },
        async save () {
            this.saveLoading = true

            await Menu.
            setTimeout(() => {
                vm.saveSuccess()
            }, 1000)
        },
        saveSuccess () {
            util.deepCopyFromTo(this.edittingCategory, this.promotion)
            this.saveLoading = false
            this.$Message.success('保存成功')

            if (this.category.new) {
                this.category.new = false
                this.edittingCategory.new = false
                this.$emit('add-promotion', vm.promotion)
            }
        },
        saveFailure () {
            this.saveLoading = false
            this.$Message.error('保存失败')
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
            this.edittingCategory = JSON.parse(JSON.stringify(this.category))
        }
    }
}
</script>

