<template>
    <div style="width:100%;height:100%;" id="pay_way_con"></div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'payWayPie',
    data () {
        return {
            //
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
                    data: ['微信', '支付宝', '信用卡', '比特币']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 210, name: '微信', itemStyle: {normal: {color: '#9bd598'}}},
                            {value: 130, name: '支付宝', itemStyle: {normal: {color: '#abd5f2'}}},
                            {value: 79, name: '信用卡', itemStyle: {normal: {color: '#ab8df2'}}},
                            {value: 54, name: '比特币', itemStyle: {normal: {color: '#ffd58f'}}}
                        ],
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
