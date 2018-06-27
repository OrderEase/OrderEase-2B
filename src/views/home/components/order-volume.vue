<template>
    <div style="width:100%;height:100%;" id="order_volume_con"></div>
</template>

<script>
import echarts from 'echarts'
export default {
    name: 'orderVolume',
    computed: {
        orderData () {
            return this.$store.state.restaurant.analytics.countOrders.map(date => {
                return {
                    name: date.name,
                    value: date.value,
                    itemStyle: {
                        normal: {
                            color: '#2d8cf0'
                        }
                    }
                }
            })
        },
        yAxisData () {
            return this.$store.state.restaurant.analytics.countOrders.map(date => date.name)
        }
    },
    mounted () {
        this.$nextTick(() => {
            let orderVolume = echarts.init(document.getElementById('order_volume_con'))
            let xAxisData = []
            let data1 = []
            let data2 = []
            for (let i = 0; i < 20; i++) {
                xAxisData.push('类目' + i)
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
            }

            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: 0,
                    left: '2%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: this.yAxisData,
                    nameTextStyle: {
                        color: '#c3c3c3'
                    }
                },
                series: [
                    {
                        name: '订单量',
                        type: 'bar',
                        data: this.orderData
                    }
                ]
            }

            orderVolume.setOption(option)

            window.addEventListener('resize', function () {
                orderVolume.resize()
            })
        })
    }
}
</script>
