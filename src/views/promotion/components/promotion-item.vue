<style lang="less">
    @import '../../../styles/common.less';
</style>

<template>
    <Card class="height-150px">
        <Row>
            <i-col span="22">
                <Row>
                    <h3>主题: {{ promotion.theme }}</h3>
                </Row>
            </i-col>
            <i-col span="2">
                <a :disabled="saveLoading" @click="requestEdit"><Icon type="compose" size="18"></Icon></a>
                <a :disabled="saveLoading" @click="requestDelete"><Icon type="trash-a" size="18"></Icon></a>
            </i-col>
            <Row class="margin-top-30">
                <i-col span="18">
                    <p>类型: {{ mode }}</p>
                </i-col>
            </Row>
            <Row>
                <i-col span="18">
                    <p>起始时间: {{ promotion.begin }}</p>
                </i-col>
            </Row>
            <Row>
                <i-col span="18">
                    <p>终止时间: {{ promotion.end }}</p>
                </i-col>
                <i-col v-if="!overtime" span="6">
                    <i-switch
                        v-model="isrun"
                        :disabled="saveLoading"
                        @on-change="save"
                        size="large"
                    >
                        <span slot="open">进行</span>
                        <span slot="close">暂停</span>
                    </i-switch>
                </i-col>
            </Row>
        </Row>
    </Card>
</template>

<script>
import Util from '@/libs/util.js'

export default {
    props: {
        promotion: Object
    },
    data () {
        return {
            saveLoading: false
        }
    },
    computed: {
        mode () {
            return this.promotion.rules[0].mode === 1 ? '满减' : '满折'
        },
        isrun: {
            get () {
                return this.promotion.isend === 1 ? false : true
            },
            set (val) {
                this.promotion.isend = val === true ? 0 : 1
            }
        },
        overtime () {
            let now = new Date()
            let begin = new Date(this.promotion.begin)
            let end = new Date(this.promotion.end)

            return now < begin || now > end
        }
    },
    methods: {
        requestEdit () {
            this.$emit('request-edit', this.promotion)
        },
        requestDelete () {
            this.$emit('request-delete', this.promotion)
        },
        async save (val) {
            this.saveLoading = true
            try {
                let editedPromotion = Util.deepCopy(this.promotion)

                await this.$store.dispatch('promotion/updatePromotion', {
                    promotion: editedPromotion,
                    deletedRules: []
                })

                this.$Message.success(editedPromotion.isend === 1 ? '活动已暂停' : '活动进行中')
                this.syncEditting = false
            } catch (err) {
                this.$Message.error('活动状态变更失败')
            }
            this.saveLoading = false
        }
    }
}
</script>

