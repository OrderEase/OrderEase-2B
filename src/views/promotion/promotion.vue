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
            validPromotionsList: [],
            invalidPromotionsList: [],

            editingPromotion: {},
            editting: false
        };
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
                start: {
                    date: '',
                    time: ''
                },
                end: {
                    date: '',
                    time: ''
                },
                mutiply: false,
                contentList: []
            })
        },
        addPromotion (promotion) {
            // 判断时间划分 =》换成过滤器划分是否过期
            this.validPromotionsList.push(promotion)
        },
        getPromotions () {
            this.validPromotionsList = [
                {
                    name: '1',
                    type: '1',
                    start: {
                        date: '',
                        time: ''
                    },
                    end: {
                        date: '',
                        time: ''
                    },
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
                },
                {
                    name: '2',
                    type: '满减',
                    start: {
                        date: '',
                        time: ''
                    },
                    end: {
                        date: '',
                        time: ''
                    },
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
            ],
            this.invalidPromotionsList = [
                {
                    name: '1',
                    type: '1',
                    start: {
                        date: '',
                        time: ''
                    },
                    end: {
                        date: '',
                        time: ''
                    },
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
                },
                {
                    name: '2',
                    type: '满减',
                    start: {
                        date: '',
                        time: ''
                    },
                    end: {
                        date: '',
                        time: ''
                    },
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

<style>

</style>
