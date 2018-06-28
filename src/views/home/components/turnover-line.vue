<template>
    <div style="width:100%;height:100%;" id="turnover_line_con"></div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'turnoverLine',
    computed: {
        color: () => ['#7e6b9e', '#b4ade0', '#cccce4', '#92a2da', '#607dd1'],
        series () {
            return this.$store.state.restaurant.analytics.turnover.data.map((type, idx) => {
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
            if (this.$store.state.restaurant.analytics.turnover) {
                return this.$store.state.restaurant.analytics.turnover.xAxis
            } else {
                return []
            }
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.drawLine()
        })
    },
    watch: {
        xAxisData (val) {
            this.drawLine()
        }
    },
    methods: {
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