<style lang="less">
    @import '../../styles/common.less';
    @import './kitchen.less';
    @import '../../styles/loading.less';
</style>

<template>
    <div class="kitchen">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中...</div>
        </Spin>
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
            spinShow: false,
            columns: [
                {
                    type: 'expand',
                    width: 50,
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                order: params.row
                            },
                            on: {
                                'finish-order-dishes': this.finishOrderDishes
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
                                class: {
                                    'kitchen-finish-all-btn': true
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.finishOrderDishes(
                                            {
                                                id: params.row.id,
                                                finished: params.row.finished,
                                                orderItems: params.row.orderItems,
                                                repackDishes: params.row.repackDishes.filter(
                                                    item => item.orderItem.finished === 0
                                                )
                                            }
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
        this.spinShow = true
        this.getOrdersList()
    },
    methods: {
        async getOrdersList () {
            await this.$store.dispatch('order/getOrdersList')
            this.spinShow = false
        },
        async finishOrderDishes (specialOrder) {
            try {
                await this.$store.dispatch('order/finishOrderItems', specialOrder)
                await this.$store.dispatch('order/getOrdersList')
                this.$Message.success('完成 ' + specialOrder.repackDishes.length + ' 道菜')
            } catch (err) {
                this.$Message.error(err.message)
            }
        }
    }
}
</script>
