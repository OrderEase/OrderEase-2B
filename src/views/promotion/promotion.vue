<style lang="less">
    @import '../../styles/common.less';
    @import './promotion.less';
</style>

<template>
    <div class="promotion">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中...</div>
        </Spin>
        <Row>
            <i-col span="24">
                <h2 class="status-title margin-bottom-15">
                    <Icon type="checkmark" color="green"></Icon>
                    进行中
                </h2>
                <promotion-grid
                    :promotions-list="validPromotionsList"
                    :show-create-item="true"
                    @request-edit="editPromotion"
                    @request-add="addPromotion"
                    @request-delete="deletePromotion"
                ></promotion-grid>
            </i-col>
        </Row>
        <Row class="margin-top-10">
            <i-col span="24">
                <h2 class="status-title margin-bottom-15">
                    <Icon type="close" color="red"></Icon>
                    已失效
                </h2>
                <promotion-grid
                    :promotions-list="invalidPromotionsList"
                    :show-create-item="false"
                    @request-edit="editPromotion"
                    @request-delete="deletePromotion"
                ></promotion-grid>
            </i-col>
        </Row>
        <promotion-editor
            :editting="isEditting"
            :promotion="edittingPromotion"
            @on-editting-change="syncEditting"
        ></promotion-editor>
    </div>
</template>

<script>
import PromotionGrid from './components/promotion-grid.vue'
import PromotionEditor from './components/promotion-editor.vue'
import { mapState } from 'vuex'
import Util from '@/libs/util.js'

export default {
    name: 'promotion_index',
    components: {
        PromotionGrid,
        PromotionEditor
    },
    data () {
        return {
            spinShow: false,
            isEditting: false,
            edittingPromotion: {}
        }
    },
    computed: {
        ...mapState({
            validPromotionsList (state) {
                let now = new Date()

                return state.promotion.promotionsList.filter(promotion => {
                    let begin = new Date(promotion.begin)
                    let end = new Date(promotion.end)

                    return promotion.isend === 0 && now >= begin && now <= end
                })
            },
            invalidPromotionsList (state) {
                let now = new Date()

                return state.promotion.promotionsList.filter(promotion => {
                    let begin = new Date(promotion.begin)
                    let end = new Date(promotion.end)

                    return promotion.isend === 1 || now < begin || now > end
                })
            }
        })
    },
    created () {
        this.spinShow = true
        this.getPromotions()
    },
    methods: {
        async getPromotions () {
            await this.$store.dispatch('promotion/getPromotionsList')
            this.spinShow = false
        },
        syncEditting (value) {
            this.isEditting = value
        },
        addPromotion () {
            this.isEditting = true
            this.edittingPromotion = {
                theme: '',
                begin: '',
                end: '',
                isend: false,
                mode: 1,
                rules: [
                    {
                        mode: 1,
                        requirement: 0,
                        discount: 0
                    }
                ]
            }
        },
        editPromotion (promotion) {
            this.isEditting = true
            this.edittingPromotion = Util.deepCopy(promotion)
        },
        async deletePromotion (promotion) {
            this.$Modal.confirm({
                title: '删除活动',
                content: '<p>确定删除该活动么？</p>',
                loading: true,
                onOk: async () => {
                    try {
                        await this.$store.dispatch('promotion/deletePromotion', promotion)

                        this.$Message.success('成功删除')
                        this.$Modal.remove()
                    } catch (err) {
                        this.$Modal.remove()
                        this.$Message.error('删除失败')
                    }
                }
            })
        }
    }
}
</script>
