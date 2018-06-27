<template>
    <div style="width:100%;height:100%;" id="finish_time"></div>
</template>

<script>
import echarts from 'echarts'
import { mapState } from 'vuex'

export default {
    name: 'finishTime',
    computed: {
        ...mapState({
            order: state => state.restaurant.analytics.countFinishTime.order,
            dish: state => state.restaurant.analytics.countFinishTime.dish
        })
    },
    mounted () {
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
                        max: this.order.max,
                        detail: {
                            formatter: '{value}分钟',
                            fontSize: 18,
                            offsetCenter: [0, '50px']
                        },
                        data: [{value: this.order.avg, name: '平均订单完成'}],
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
                        max: this.dish.max,
                        detail: {
                            formatter: '{value}分钟',
                            fontSize: 18,
                            offsetCenter: [0, '50px']
                        },
                        data: [{value: this.dish.avg, name: '平均菜品完成'}],
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
</script>
