<style lang="less">
    @import '../../styles/common.less';
    @import './promotion.less';
</style>

<template>
    <div class="promotion">
        <Row>
            <i-col span="24">
                <h2 class="status-title margin-bottom-15">
                    <Icon type="checkmark" color="green"></Icon>
                    进行中
                </h2>
                <promotion-grid
                    :promotions-list="validPromotionsList"
                    :show-create-item="true"
                    @request-edit="requestEdit"
                    @request-add="requestAdd"
                ></promotion-grid>
            </i-col>
        </Row>
        <Row class="margin-top-10">
            <i-col span="24">
                <h2 class="status-title margin-bottom-15">
                    <Icon type="close" color="red"></Icon>
                    已过期
                </h2>
                <promotion-grid
                    :promotions-list="invalidPromotionsList"
                    :show-create-item="false"
                    @request-edit="requestEdit"
                ></promotion-grid>
            </i-col>
        </Row>
        <promotion-editor
            :editting="editting"
            :promotion="editingPromotion"
            @on-editting-change="syncEditting"
            @add-promotion="addPromotion"
        ></promotion-editor>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import PromotionGrid from './components/promotion-grid.vue';
import PromotionEditor from './components/promotion-editor.vue';

export default {
    name: 'promition_index',
    components: {
        PromotionGrid,
        PromotionEditor
    },
    data () {
        return {
            promotionsList: [],

            editingPromotion: {},
            editting: false
        };
    },
    computed: {
        validPromotionsList () {
            let now = new Date()

            return this.promotionsList.filter(promotion => {
                let start = new Date(promotion.start)
                let end = new Date(promotion.end)

                return now >= start && now <= end
            })
        },
        invalidPromotionsList () {
            let now = new Date()

            return this.promotionsList.filter(promotion => {
                let start = new Date(promotion.start)
                let end = new Date(promotion.end)

                return now < start || now > end
            })
        }
    },
    methods: {
        requestEdit (promotion) {
            this.editingPromotion = promotion
            this.editting = true
        },
        syncEditting (val) {
            this.editting = val
        },
        requestAdd() {
            this.requestEdit({
                new: true,
                name: '',
                type: '',
                start: '',
                end: '',
                mutiply: false,
                contentList: []
            })
        },
        addPromotion (promotion) {
            this.promotionsList.push(promotion)
        },
        getPromotions () {
            this.promotionsList = [
                {
                    name: '1',
                    type: '满减',
                    start: '2008-11-22 03:22',
                    end: '2009-01-11 11:11',
                    mutiply: false,
                    contentList: [
                        {
                            each: 11,
                            payback: 3
                        },
                        {
                            each: 33,
                            payback: 1
                        }
                    ]
                }
            ]
        }
    },
    created () {
        this.getPromotions()
    }
};
</script>