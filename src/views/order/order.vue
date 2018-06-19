<style lang="less">
    @import '../../styles/common.less';
    @import './order.less';
</style>

<template>
    <div class="order">
        <Row>
            <i-col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="android-contact"></Icon>
                        查看订单
                    </p>
                    <Row>
                        <Input
                            v-model="searchId"
                            @on-change="handleSearch"
                            icon="search"
                            placeholder="请输入订单号搜索..."
                            style="width: 200px"
                        />
                    </Row>
                    <Row class="margin-top-30">
                        <i-col span="24">
                            <Table
                                :columns="columns"
                                :data="pageOrders"
                                @on-row-click="checkMore"
                                stripe
                            ></Table>
                        </i-col>
                    </Row>
                    <Row class="margin-top-30">
                        <Page
                            :current.sync="page"
                            :total="filtedOrders.length"
                            :page-size="pageOptions['page-size']"
                            @on-change="handlePage"
                            show-total
                        ></Page>
                    </Row>
                </Card>
            </i-col>
        </Row>
        <Modal
            v-model="orderDetailModal"
            title="订单详情"
            width="400">
            <Row type="flex" justify="space-between">
                <i-col span="17">
                    <p>客户: {{ checkedOrder.userId }}</p>
                </i-col>
                <i-col span="7">
                    <p>桌号: {{ checkedOrder.tableId }}</p>
                </i-col>
            </Row>
            <Row type="flex" justify="space-between">
                <i-col span="17">
                    <p>订单号: {{ checkedOrder.id }}</p>
                </i-col>
                <i-col span="7">
                    <p>状态: {{ checkedOrder.isPay ? (checkedOrder.finished ? '已完成' : '未完成') : '未支付' }}</p>
                </i-col>
            </Row>
            <Row type="flex" justify="space-between" class="margin-top-10">
                <i-col span="17">
                    <p>支付方式: {{ checkedOrder.payWay }}</p>
                </i-col>
                <i-col span="7">
                    <p>总价: {{ checkedOrder.total }} 元</p>
                </i-col>
            </Row>
            <Row type="flex" justify="space-between" class="margin-bottom-20 bottom-line">
                <i-col span="17">
                    <p>支付时间: {{ checkedOrder.payDate }}</p>
                </i-col>
                <i-col span="7" class="padding-bottom-10">
                    <p>实付: {{ checkedOrder.due }} 元</p>
                </i-col>
            </Row>
            <Row v-for="(content, index) in checkedOrder.dishes" :key="index" class="dish-wrap">
                <i-col span="8" class="dish-img-wrap">
                    <img class="dish-img" :src="content.dish.img" :alt="content.dish.name">
                </i-col>
                <i-col span="8">
                    <Row>
                        <h3>{{ content.dish.name }}</h3>
                    </Row>
                    <Row>
                        <p class="dish-quantity">x {{ content.quantity }}</p>
                    </Row>
                </i-col>
                <i-col span="6" offset="2">
                    <Row>
                        <p v-if="content.finished === 1" class="dish-finished-true">已完成</p>
                        <p v-if="content.finished === 0" class="dish-finished-false">未完成</p>
                    </Row>
                    <Row v-if="content.urge === 1">
                        <p class="dish-urge">已催单</p>
                    </Row>
                </i-col>
            </Row>
        </Modal>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'order_index',
    data () {
        return {
            orderDetailModal: false,
            checkedOrder: {},
            page: 1,
            pageOptions: {
                'page-size': 10
            },
            searchId: '',
            filtedOrders: [],
            pageOrders: [],
            columns: [
                {
                    title: '时间',
                    key: 'payDate',
                    width: 150
                },
                {
                    title: '订单号',
                    key: 'id'
                },
                {
                    title: '客户',
                    key: 'userId'
                },
                {
                    title: '桌号',
                    key: 'tableId'
                },
                {
                    title: '总价（元）',
                    key: 'total'
                },
                {
                    title: '折后（元）',
                    key: 'due'
                },
                {
                    title: '状态',
                    key: 'state'
                }
            ]
        }
    },
    computed: {
        ...mapState({
            ordersList: state => state.order.ordersList
        })
    },
    created () {
        this.getOrders()
    },
    methods: {
        async getOrders () {
            await this.$store.dispatch('order/getOrdersList')
            this.filtedOrders = this.ordersList
            this.handlePage(1)
        },
        search (data, argumentObj) {
            let res = data
            let dataClone = data
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1
                    })
                    dataClone = res
                }
            }
            return res
        },
        handleSearch () {
            this.filtedOrders = this.search(this.ordersList, {id: this.searchId})
            this.page = 1
            this.handlePage(1)
        },
        handlePage (page) {
            let beginIdx = (page - 1) * this.pageOptions['page-size']
            let endIdx = Math.min(beginIdx + this.pageOptions['page-size'], this.filtedOrders.length)
            this.pageOrders = this.filtedOrders.slice(beginIdx, endIdx)
        },
        checkMore (order) {
            this.orderDetailModal = true
            this.checkedOrder = order
        }
    }
}
</script>
