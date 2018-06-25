let turnoverSevenDays = {
    xAxis: [
        '6月23日', '6月24日', '6月25日', '6月26日', '6月27日', '6月28日', '6月29日'
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

let turnoverThirtyDays = {
    xAxis: [
        '6月1日', '6月2日', '6月3日', '6月4日', '6月5日', '6月6日', '6月7日', '6月8日', '6月9日', '6月10日',
        '6月11日', '6月12日', '6月13日', '6月14日', '6月15日', '6月16日', '6月17日', '6月18日', '6月19日', '6月20日',
        '6月21日', '6月22日', '6月23日', '6月24日', '6月25日', '6月26日', '6月27日', '6月28日', '6月29日', '6月30日'
    ],
    data: [
        {
            name: '主食',
            data: [320, 332, 301, 334, 390, 330, 320, 320, 332, 301,
                334, 390, 330, 320, 320, 332, 301, 334, 390, 330,
                320, 320, 332, 301, 334, 390, 330, 320, 332, 301]
        },
        {
            name: '肉类',
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101,
                134, 90, 230, 210, 120, 132, 101, 134, 90, 230,
                210, 120, 132, 101, 134, 90, 230, 210, 120, 132]
        },
        {
            name: '青菜',
            data: [257, 358, 278, 234, 290, 330, 310, 257, 358, 278,
                234, 290, 330, 310, 257, 358, 278, 234, 290, 330,
                310, 257, 358, 278, 234, 290, 330, 310, 257, 358]
        },
        {
            name: '甜品',
            data: [379, 268, 354, 269, 310, 478, 358, 379, 268, 354,
                269, 310, 478, 358, 379, 268, 354, 269, 310, 478,
                358, 379, 268, 354, 269, 310, 478, 358, 379, 268]
        },
        {
            name: '饮品',
            data: [420, 345, 546, 445, 272, 324, 258, 420, 345, 546,
                445, 272, 324, 258, 420, 345, 546, 445, 272, 324,
                258, 420, 345, 546, 445, 272, 324, 258, 420, 345]
        }
    ]
}

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
    turnover: turnoverSevenDays
}

let summaryData = [
    {
        date: '2018-06-17',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 12,
        total: 1500
    },
    {
        date: '2018-06-18',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 12511,
        total: 1500
    },
    {
        date: '2018-06-19',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-20',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-21',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-22',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-23',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-24',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-25',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-26',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-27',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-28',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    },
    {
        date: '2018-06-29',
        order: 123,
        dish: 321,
        avgOrder: 31,
        avgDish: 15,
        due: 1240,
        total: 1500
    }
]

let analytics = {}

analytics.get = (params) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (params && params.field === 'turnover' && params.days === 7) {
                resolve(JSON.parse(JSON.stringify(turnoverSevenDays)))
            } else if (params && params.field === 'turnover' && params.days === 30) {
                resolve(JSON.parse(JSON.stringify(turnoverThirtyDays)))
            } else if (params && params.field === 'summary') {
                resolve(JSON.parse(JSON.stringify(summaryData)))
            } else {
                resolve(JSON.parse(JSON.stringify(analyticsInfo)))
            }
        }, 500)
    })
}

export default analytics
