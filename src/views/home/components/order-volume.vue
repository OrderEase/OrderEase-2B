<style lang="less">
    @import '../../../styles/loading.less';
</style>

<template>
    <div style="width:100%;height:100%;">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>{{ spinText }}</div>
        </Spin>
        <div style="width:100%;height:100%;" id="order_volume_con"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import Analytics from '@/api/analytics'

export default {
    name: 'orderVolume',
    data () {
        return {
            spinText: '加载中...',
            spinShow: true,
            countOrders: {}
        }
    },
    computed: {
        orderData () {
            return this.countOrders.map(date => {
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
            return this.countOrders.map(date => date.name)
        }
    },
    created () {
        this.init()
    },
    methods: {
        async init () {
            try {
                this.countOrders = await Analytics.getCountOrders()
                this.spinShow = false
                this.drawGraph()
            } catch (error) {
                this.spinText = '加载失败，请检查网络'
            }
        },
        drawGraph () {
            this.$nextTick(() => {
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

                try {
                    let orderVolume = echarts.init(document.getElementById('order_volume_con'))
                    orderVolume.setOption(option)

                    window.addEventListener('resize', function () {
                        orderVolume.resize()
                    })
                } catch (error) {
                    ;
                }
            })
        }
    }
}
</script>
