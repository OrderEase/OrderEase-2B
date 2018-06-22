<template>
    <div style="width:100%;height:100%;" id="pay_way_con"></div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'payWayPie',
    computed: {
        payWayData () {
            let colors = ['#9bd598', '#abd5f2', '#ab8df2', '#ffd58f']
            return this.$store.state.restaurant.analytics.payWay.map((way, idx) => {
                return {
                    name: way.name,
                    value: way.value,
                    itemStyle: {
                        normal: {
                            color: colors[idx]
                        }
                    }
                }
            })
        },
        legendData () {
            return this.$store.state.restaurant.analytics.payWay.map(way => way.name)
        }
    },
    mounted () {
        this.$nextTick(() => {
            var payWayPie = echarts.init(document.getElementById('pay_way_con'))
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                    data: this.legendData
                },
                series: [
                    {
                        name: '支付方式',
                        type: 'pie',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: this.payWayData,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            payWayPie.setOption(option)
            window.addEventListener('resize', function () {
                payWayPie.resize()
            })
        })
    }
}
</script>
