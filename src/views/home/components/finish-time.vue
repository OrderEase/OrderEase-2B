<template>
    <div style="width:100%;height:100%;" id="user_flow"></div>
</template>

<script>
import echarts from 'echarts'

const option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}分钟'
    },
    series: [
        {
            name: '订单',
            type: 'gauge',
            min: 0,
            max: 60,
            detail: {
                formatter: '{value}分钟',
                fontSize: 18,
                offsetCenter: [0, '50px']
            },
            data: [{value: 49, name: '平均订单完成'}],
            center: ['25%', '50%'],
            radius: '80%',
            title: {
                offsetCenter: [0, '80px']
            },
            axisLine: {
                lineStyle: {
                    // color: [],
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
            max: 30,
            detail: {
                formatter: '{value}分钟',
                fontSize: 18,
                offsetCenter: [0, '50px']
            },
            data: [{value: 22, name: '平均菜品完成'}],
            center: ['75%', '50%'],
            radius: '80%',
            title: {
                offsetCenter: [0, '80px']
            },
            axisLine: {
                lineStyle: {
                    // color: [],
                    width: 20
                }
            },
            splitLine: {
                length: 20
            }
        }
    ]
}

export default {
    name: 'userFlow',
    mounted () {
        let userFlow = echarts.init(document.getElementById('user_flow'))
        userFlow.setOption(option)

        window.addEventListener('resize', function () {
            userFlow.resize()
        })
    }
}
</script>
