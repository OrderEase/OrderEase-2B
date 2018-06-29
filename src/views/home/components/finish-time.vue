<style lang="less">
    @import '../../../styles/loading.less';
</style>

<template>
    <div style="width:100%;height:100%;">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>{{ spinText }}</div>
        </Spin>
        <div style="width:100%;height:100%;" id="finish_time"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import Analytics from '@/api/analytics'
import { mapState } from 'vuex'

export default {
    name: 'finishTime',
    data () {
        return {
            spinText: '加载中...',
            spinShow: true,
            countFinishTime: {}
        }
    },
    created () {
        this.init()
    },
    methods: {
        async init () {
            try {
                this.countFinishTime = await Analytics.getCountFinishTime()
                this.spinShow = false
                this.drawGraph()
            } catch (error) {
                this.spinText = '加载失败，请检查网络'
            }
        },
        drawGraph () {
            this.$nextTick(() => {
                const option = {
                    tooltip: {
                        formatter: '{a} <br/>{b} : {c}分钟'
                    },
                    series: [
                        {
                            name: '订单',
                            type: 'gauge',
                            min: 0,
                            max: this.countFinishTime.order.max,
                            detail: {
                                formatter: '{value}分钟',
                                fontSize: 18,
                                offsetCenter: [0, '50px']
                            },
                            data: [{value: this.countFinishTime.order.avg, name: '平均订单完成'}],
                            center: ['25%', '50%'],
                            radius: '80%',
                            title: {
                                offsetCenter: [0, '80px']
                            },
                            axisLine: {
                                lineStyle: {
                                    width: 20
                                }
                            },
                            splitLine: {
                                length: 20
                            }
                        },
                        {
                            name: '菜品',
                            type: 'gauge',
                            min: 0,
                            max: this.countFinishTime.dish.max,
                            detail: {
                                formatter: '{value}分钟',
                                fontSize: 18,
                                offsetCenter: [0, '50px']
                            },
                            data: [{value: this.countFinishTime.dish.avg, name: '平均菜品完成'}],
                            center: ['75%', '50%'],
                            radius: '80%',
                            title: {
                                offsetCenter: [0, '80px']
                            },
                            axisLine: {
                                lineStyle: {
                                    width: 20
                                }
                            },
                            splitLine: {
                                length: 20
                            }
                        }
                    ]
                }

                let finishTime = echarts.init(document.getElementById('finish_time'))
                finishTime.setOption(option)

                window.addEventListener('resize', function () {
                    finishTime.resize()
                })
            })
        }
    }
}
</script>
