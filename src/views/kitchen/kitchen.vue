<style lang="less">
    @import '../../styles/common.less';
    @import './kitchen.less';
</style>

<template>
    <div class="kitchen">
        <Row class="margin-top-20">
            <Table :columns="columns" :data="unFinishedOrdersList"></Table>
        </Row>
    </div>
</template>

<script>
import expandRow from './kitchen-table-expand.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'kitchen_index',
    components: {
        expandRow
    },
    data () {
        return {
            columns: [
                {
                    type: 'expand',
                    width: 50,
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                order: params.row
                            }
                        })
                    }
                },
                {
                    title: '订单号',
                    key: 'id'
                },
                {
                    title: '支付时间',
                    key: 'payDate'
                },
                {
                    title: '桌号',
                    key: 'tableId'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.finishOrderDishes(
                                            params.row.dishes.filter(
                                                item => item.finished === 0
                                            )
                                        )
                                    }
                                }
                            }, '完成全部')
                        ])
                    }
                }
            ]
        }
    },
    computed: {
        ...mapGetters({
            unFinishedOrdersList: 'order/unFinishedOrdersList'
        })
    },
    created () {
        this.getOrdersList()
    },
    methods: {
        async getOrdersList () {
            await this.$store.dispatch('order/getOrdersList')
        },
        async finishOrderDishes (finishedDishesList) {
            console.log(finishedDishesList)
        }
    }
}
</script>
