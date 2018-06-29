<style lang="less">
    @import '../../../styles/loading.less';
</style>

<template>
    <div style="width:100%;height:100%;">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>{{ spinText }}</div>
        </Spin>
        <div style="width:100%;height:100%;" id="turnover_line_con"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import Analytics from '@/api/analytics'

export default {
    name: 'turnoverLine',
    props: {
        days: Number
    },
    data () {
        return {
            spinText: '加载中...',
            spinShow: true,
            turnover: {}
        }
    },
    computed: {
        color: () => ['#7e6b9e', '#b4ade0', '#cccce4', '#92a2da', '#607dd1'],
        series () {
            return this.turnover.data.map((type, idx) => {
                return {
                    name: type.name,
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                        normal: {
                            color: this.color[idx]
                        }
                    },
                    data: type.data
                }
            })
        },
        xAxisData () {
            return this.turnover.xAxis
        }
    },
    created () {
        this.init(7)
    },
    watch: {
        days (val) {
            this.init(val)
        }
    },
    methods: {
        async init (days) {
            try {
                this.spinShow = true
                this.turnover = await Analytics.getTurnover(days)
                this.spinShow = false
                this.drawLine()
            } catch (error) {
                this.spinText = '加载失败，请检查网络'
            }
        },
        drawLine () {
            const option = {
                color: this.color,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    top: '5%',
                    left: '1.2%',
                    right: '1%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: this.xAxisData
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: this.series
            }
            let serviceRequestCharts = echarts.init(document.getElementById('turnover_line_con'))
            serviceRequestCharts.setOption(option)

            window.addEventListener('resize', () => {
                serviceRequestCharts.resize()
            })
        }
    }
}
</script>