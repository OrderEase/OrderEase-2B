<style lang="less">
    @import '../../../styles/loading.less';
</style>

<template>
    <div style="width:100%;height:100%;">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>{{ spinText }}</div>
        </Spin>
        <div style="width:100%;height:100%;" id="pay_way_con"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import Analytics from '@/api/analytics'

export default {
    name: 'payWayPie',
    data () {
        return {
            spinText: '加载中...',
            spinShow: true,
            countPayWay: {}
        }
    },
    computed: {
        payWayData () {
            let colors = ['#9bd598', '#abd5f2', '#ab8df2', '#ffd58f']
            return this.countPayWay.map((way, idx) => {
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
            return this.countPayWay.map(way => way.name)
        }
    },
    created () {
        this.init()
    },
    methods: {
        async init () {
            try {
                this.countPayWay = await Analytics.getCountPayWay()
                this.spinShow = false
                this.drawGraph()
            } catch (error) {
                this.spinText = '加载失败，请检查网络'
            }
        },
        drawGraph () {
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
}
</script>
