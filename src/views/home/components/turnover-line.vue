<template>
    <div style="width:100%;height:100%;" id="turnover_line_con"></div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'turnoverLine',
    mounted () {
        const option = {
            color: ['#7e6b9e', '#b4ade0', '#cccce4', '#92a2da', '#607dd1'],
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
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '主食',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                        normal: {
                            color: '#7e6b9e'
                        }
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '肉类',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                        normal: {
                            color: '#b4ade0'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '青菜',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                        normal: {
                            color: '#cccce4'
                        }
                    },
                    data: [257, 358, 278, 234, 290, 330, 310]
                },
                {
                    name: '甜品',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                        normal: {
                            color: '#92a2da'
                        }
                    },
                    data: [379, 268, 354, 269, 310, 478, 358]
                },
                {
                    name: '饮品',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#607dd1'
                        }
                    },
                    data: [420, 345, 546, 445, 272, 324, 258]
                }
            ]
        }
        const serviceRequestCharts = echarts.init(document.getElementById('turnover_line_con'))
        serviceRequestCharts.setOption(option)

        window.addEventListener('resize', function () {
            serviceRequestCharts.resize()
        })
    }
}
</script>