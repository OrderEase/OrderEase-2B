let analyticsInfo = {
    countCard: {
        totalUser: 123,
        newUser: 128,
        turnover: 43805,
        dish: 3950
    },
    likeRank: [
        { name: '牛板筋', value: 250 },
        { name: '香菇炖鸡', value: 141 },
        { name: '白切鸡', value: 138 },
        { name: '油焖小龙虾', value: 74 },
        { name: '土豆牛肉', value: 47 },
        { name: '冰糖葫芦', value: 45 },
        { name: '手撕包菜', value: 34 },
        { name: '麻辣香锅', value: 22 },
        { name: '水煮肉片', value: 15 }
    ],
    saleRank: [
        { name: '麻辣香锅', value: 3421 },
        { name: '牛板筋', value: 2444 },
        { name: '香菇炖鸡', value: 1111 },
        { name: '油焖小龙虾', value: 910 },
        { name: '水煮肉片', value: 888 },
        { name: '白切鸡', value: 703 },
        { name: '土豆牛肉', value: 413 },
        { name: '手撕包菜', value: 242 },
        { name: '冰糖葫芦', value: 111 }
    ],
    orderCount: [
        { name: '周一', value: 453 },
        { name: '周二', value: 879 },
        { name: '周三', value: 235 },
        { name: '周四', value: 159 },
        { name: '周五', value: 543 },
        { name: '周六', value: 130 },
        { name: '周日', value: 110 }
    ],
    payWay: [
        { name: '微信', value: 210 },
        { name: '支付宝', value: 130 },
        { name: '信用卡', value: 79 },
        { name: '比特币', value: 54 }
    ],
    finishTime: {
        order: {
            avg: 49,
            max: 60
        },
        dish: {
            avg: 18,
            max: 30
        }
    },
    turnover: {
        xAxis: [
            '周一', '周二', '周三', '周四', '周五', '周六', '周日'
        ],
        data: [
            {
                name: '主食',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '肉类',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '青菜',
                data: [257, 358, 278, 234, 290, 330, 310]
            },
            {
                name: '甜品',
                data: [379, 268, 354, 269, 310, 478, 358]
            },
            {
                name: '饮品',
                data: [420, 345, 546, 445, 272, 324, 258]
            }
        ]
    }
}

let analytics = {}

analytics.get = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(JSON.parse(JSON.stringify(analyticsInfo)))
        }, 500)
    })
}

export default analytics
