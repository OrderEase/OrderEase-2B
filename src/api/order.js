import Util from '@/libs/util.js'

let order = {}

let ordersList = [
    {
        id: '1231',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '1232',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '1233',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 0,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 0,
                time: '',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '1234',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '1235',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '123',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '123',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '123',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '123',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '123',
        userId: 'saozhuxuqi',
        tableId: '23E',
        total: 123,
        due: 100,
        isPay: 1,
        payId: '123123123',
        payWay: '微信支付',
        payDate: '2018-06-03 12:33:11',
        finished: 0,
        dishes: [
            {
                dish: {
                    id: '3920',
                    name: '鸡公煲',
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 鸡公煲',
                    rank: 0
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '毛血旺',
                    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 毛血旺',
                    rank: 1
                },
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '456',
        userId: 'saozhuxuqi',
        tableId: '21A',
        total: 80,
        due: 76,
        isPay: 1,
        payId: '234234234',
        payWay: '微信支付',
        payDate: '2018-06-08 18:33:11',
        finished: 1,
        dishes: [
            {
                dish: {
                    id: '1121',
                    name: '爆肚',
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4012425942,166764615&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 爆肚',
                    rank: 3
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-08 18:50:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '西洋菜',
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=562147887,3241256955&fm=27&gp=0.jpg',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 西洋菜',
                    rank: 0
                },
                quantity: 3,
                finished: 1,
                time: '2018-06-08 19:00:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '456',
        userId: 'saozhuxuqi',
        tableId: '21A',
        total: 80,
        due: 76,
        isPay: 1,
        payId: '234234234',
        payWay: '微信支付',
        payDate: '2018-06-08 18:33:11',
        finished: 1,
        dishes: [
            {
                dish: {
                    id: '1121',
                    name: '爆肚',
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4012425942,166764615&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 爆肚',
                    rank: 3
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-08 18:50:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '西洋菜',
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=562147887,3241256955&fm=27&gp=0.jpg',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 西洋菜',
                    rank: 0
                },
                quantity: 3,
                finished: 1,
                time: '2018-06-08 19:00:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '456',
        userId: 'saozhuxuqi',
        tableId: '21A',
        total: 80,
        due: 76,
        isPay: 1,
        payId: '234234234',
        payWay: '微信支付',
        payDate: '2018-06-08 18:33:11',
        finished: 1,
        dishes: [
            {
                dish: {
                    id: '1121',
                    name: '爆肚',
                    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4012425942,166764615&fm=27&gp=0.jpg',
                    price: 2.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 10,
                    description: 'Hello 爆肚',
                    rank: 3
                },
                quantity: 1,
                finished: 1,
                time: '2018-06-08 18:50:33',
                urge: 1,
                like: 0
            },
            {
                dish: {
                    id: '3910',
                    name: '西洋菜',
                    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=562147887,3241256955&fm=27&gp=0.jpg',
                    price: 28.5,
                    stock: 99,
                    avaliable: 1,
                    likes: 4,
                    description: 'Hello 西洋菜',
                    rank: 0
                },
                quantity: 3,
                finished: 1,
                time: '2018-06-08 19:00:33',
                urge: 0,
                like: 1
            }
        ]
    }
]

order.getAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Util.deepCopy(ordersList))
        }, 1000)
    })
}

export default order
