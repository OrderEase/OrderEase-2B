<style lang="less">
    @import '../../styles/common.less';
    @import '../../styles/loading.less';
    @import './analytics.less';
</style>

<template>
    <div class="summary">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中...</div>
        </Spin>
        <Row>
            <i-col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="ios-analytics"></Icon>
                        查看营业数据
                    </p>
                    <Row>
                        <DatePicker
                            v-model="dateRange"
                            @on-change="filterSummary"
                            format="yyyy/MM/dd"
                            type="daterange"
                            split-panels
                            placeholder="请选择日期范围"
                            class="summary-date-range"
                        ></DatePicker>
                        <Button type="primary" class="summary-export-data-btn" @click="exportData">导出表格</Button>
                    </Row>
                    <Row class="margin-top-30">
                        <i-col span="24">
                            <Table
                                :columns="columns"
                                :data="pageData"
                                ref="table"
                                stripe
                            ></Table>
                        </i-col>
                    </Row>
                    <Row class="margin-top-30">
                        <Page
                            :current.sync="page"
                            :total="filtedData.length"
                            :page-size="pageOptions['page-size']"
                            @on-change="handlePage"
                            show-total
                        ></Page>
                    </Row>
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
import Analytics from '@/api/analytics'

export default {
    name: 'analytics_index',
    data () {
        return {
            spinShow: false,
            page: 1,
            pageOptions: {
                'page-size': 10
            },
            dateRange: [],
            filtedData: [],
            pageData: [],

            summaryData: [],
            columns: [
                {
                    type: 'index',
                    width: 50,
                    align: 'center'
                },
                {
                    title: '日期',
                    key: 'date',
                    width: 150
                },
                {
                    title: '优惠营业额',
                    key: 'dayDue',
                    sortable: true
                },
                {
                    title: '总营业额',
                    key: 'dayTotal',
                    sortable: true
                },
                {
                    title: '订单数',
                    key: 'dayOrder',
                    sortable: true
                },
                {
                    title: '菜品数',
                    key: 'dayDish',
                    sortable: true
                },
                {
                    title: '平均订单完成时间',
                    key: 'dayAvgOrderFinishTime',
                    sortable: true,
                    width: 150
                },
                {
                    title: '平均菜品完成时间',
                    key: 'dayAvgDishFinishTime',
                    sortable: true,
                    width: 150
                }
            ]
        }
    },
    created () {
        this.spinShow = true
        this.getSummary()
    },
    methods: {
        async getSummary () {
            this.summaryData = await Analytics.getSummary()
            this.filtedData = this.summaryData
            this.handlePage(1)
            this.spinShow = false
        },
        filterSummary (dateRange) {
            if (dateRange[0] === '') {
                this.filtedData = this.summaryData
            } else {
                let begin = new Date(dateRange[0])
                let end = new Date(dateRange[1])
                end.setDate(end.getDate() + 1)

                this.filtedData = this.summaryData.filter(item => {
                    let date = new Date(item.date)
                    return date >= begin && date <= end
                })
            }

            this.handlePage(1)
        },
        handlePage (page) {
            let beginIdx = (page - 1) * this.pageOptions['page-size']
            let endIdx = Math.min(beginIdx + this.pageOptions['page-size'], this.filtedData.length)
            this.pageData = this.filtedData.slice(beginIdx, endIdx)
        },
        exportData () {
            this.$refs.table.exportCsv({
                filename: '营业数据概览',
                original: false
            })
        }
    }
}
</script>
