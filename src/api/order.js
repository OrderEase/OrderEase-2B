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
        payDate: '2018-06-04 12:33:11',
        finished: 0,
        orderItems: [
            {
                id: '1',
                orderId: '1231',
                dishId: '3920',
                quantity: 1,
                finished: 1,
                time: '2018-06-04 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '2',
                orderId: '1231',
                dishId: '3910',
                quantity: 2,
                finished: 0,
                time: '2018-06-04 12:50:33',
                urge: 0,
                like: 1
            }
        ],
        dishes: [
            {
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 4,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 3,
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 1,
                finished: 0,
                time: '',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '1236',
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '1237',
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '1238',
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '1239',
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '12310',
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
            {
                id: '3910',
                name: '毛血旺',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 毛血旺',
                rank: 1
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '3920',
                quantity: 1,
                finished: 1,
                time: '2018-06-03 12:44:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 2,
                finished: 0,
                time: '2018-06-03 12:50:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '4561',
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
            {
                id: '3910',
                name: '西洋菜',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=562147887,3241256955&fm=27&gp=0.jpg',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 西洋菜',
                rank: 0
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '1121',
                quantity: 1,
                finished: 1,
                time: '2018-06-08 18:50:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 3,
                finished: 1,
                time: '2018-06-08 19:00:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '4562',
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
            {
                id: '3910',
                name: '西洋菜',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=562147887,3241256955&fm=27&gp=0.jpg',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 西洋菜',
                rank: 0
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '1121',
                quantity: 1,
                finished: 1,
                time: '2018-06-08 18:50:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
                quantity: 3,
                finished: 1,
                time: '2018-06-08 19:00:33',
                urge: 0,
                like: 1
            }
        ]
    },
    {
        id: '4563',
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
            {
                id: '3910',
                name: '西洋菜',
                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=562147887,3241256955&fm=27&gp=0.jpg',
                price: 28.5,
                stock: 99,
                avaliable: 1,
                likes: 4,
                description: 'Hello 西洋菜',
                rank: 0
            }
        ],
        orderItems: [
            {
                id: '5',
                orderId: '1111',
                dishId: '1121',
                quantity: 1,
                finished: 1,
                time: '2018-06-08 18:50:33',
                urge: 1,
                like: 0
            },
            {
                id: '4',
                orderId: '1111',
                dishId: '3910',
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

order.update = (editedOrder) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let order = ordersList.find(order => order.id === editedOrder.id)
            order.finished = editedOrder.finished
            editedOrder.orderItems.forEach(item => {
                let storedItem = order.orderItems.find(value => value.dishId === item.dishId)
                storedItem.time = item.time
                storedItem.finished = item.finished
            })
            resolve()
        }, 1000)
    })
}

export default order
