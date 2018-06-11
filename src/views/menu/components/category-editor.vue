<template>
    <Modal v-model="syncEditting" width="260">
        <p slot="header">
            <Icon type="edit"></Icon>
            <span>编辑类别</span>
        </p>

        <Form :model="edittingCategory" :label-width="80">
            <FormItem label="类别名称">
                <Input
                    v-model="edittingCategory.category"
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
        editting: Boolean
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
                category: '',
                dishes: []
            }
        },
        async save () {
            this.saveLoading = true
            try {
                await this.$store.dispatch('menu/createCategory', this.edittingCategory)

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
        }
    }
}
</script>

