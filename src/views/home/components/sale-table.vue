<style lang="less">
    @import '../../../styles/loading.less';
</style>

<template>
    <div :style="styleObj">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>{{ spinText }}</div>
        </Spin>
        <Table :height="height" :columns="columns" :data="rankSales"></Table>
    </div>
</template>

<script>
import Analytics from '@/api/analytics'

export default {
    name: 'saleTable',
    props: {
        styleObj: Object,
        height: String
    },
    data () {
        return {
            spinText: '加载中...',
            spinShow: true,
            rankSales: [],
            columns: [
                {
                    title: '菜品',
                    key: 'name'
                },
                {
                    title: '销量',
                    key: 'value',
                    sortable: true
                }
            ]
        }
    },
    created () {
        this.init()
    },
    methods: {
        async init () {
            try {
                this.rankSales = await Analytics.getRankSales()
                this.spinShow = false
            } catch (error) {
                this.spinText = '加载失败，请检查网络'
            }
        }
    }
}
</script>
