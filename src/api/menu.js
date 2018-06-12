let menu = {}

let menuList = [
    {
        id: '0',
        name: '春季菜单',
        used: 1,
        content: [
            {
                id: '01',
                name: '荤菜',
                rank: 0,
                dishes: [
                    {
                        id: '3910',
                        name: '毛血旺',
                        img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                        price: 28.5,
                        stock: 99,
                        avaliable: 1,
                        likes: 4,
                        description: 'Hello 毛血旺',
                        rank: 0
                    },
                    {
                        id: '3920',
                        name: '鸡公煲',
                        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                        price: 2.5,
                        stock: 99,
                        avaliable: 1,
                        likes: 10,
                        description: 'Hello 鸡公煲',
                        rank: 1
                    },
                    {
                        id: '1111',
                        name: '夫妻肺片',
                        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905164004,1143377481&fm=27&gp=0.jpg',
                        price: 2.5,
                        stock: 99,
                        avaliable: 1,
                        likes: 10,
                        description: 'Hello 夫妻肺片',
                        rank: 2
                    },
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
                    }
                ]
            },
            {
                id: '02',
                name: '素菜',
                rank: 1,
                dishes: [
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
                    },
                    {
                        id: '3920',
                        name: '娃娃菜',
                        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1161728142,2680973728&fm=27&gp=0.jpg',
                        price: 2.5,
                        stock: 99,
                        avaliable: 1,
                        likes: 10,
                        description: 'Hello 娃娃菜',
                        rank: 1
                    }
                ]
            },
            {
                id: '03',
                name: '豆制品',
                rank: 2,
                dishes: [
                    {
                        id: '1111',
                        name: '豆腐串',
                        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2026208039,824549144&fm=27&gp=0.jpg',
                        price: 2.5,
                        stock: 99,
                        avaliable: 1,
                        likes: 10,
                        description: 'Hello 豆腐串',
                        rank: 0
                    }
                ]
            }
        ]
    },
    {
        id: '1',
        name: '秋季菜单',
        used: 0,
        content: [
            {
                id: '11',
                name: '荤菜',
                rank: 1,
                dishes: [
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
                    },
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
                        id: '1111',
                        name: '夫妻肺片',
                        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905164004,1143377481&fm=27&gp=0.jpg',
                        price: 2.5,
                        stock: 99,
                        avaliable: 1,
                        likes: 10,
                        description: 'Hello 夫妻肺片',
                        rank: 2
                    },
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
                    }
                ]
            },
            {
                id: '12',
                name: '素菜',
                rank: 0,
                dishes: [
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
                    },
                    {
                        id: '3920',
                        name: '娃娃菜',
                        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1161728142,2680973728&fm=27&gp=0.jpg',
                        price: 2.5,
                        stock: 99,
                        avaliable: 1,
                        likes: 10,
                        description: 'Hello 娃娃菜',
                        rank: 1
                    }
                ]
            }
        ]
    }
]

const deepCopy = (data) => {
    return JSON.parse(JSON.stringify(data))
}

menu.getAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(deepCopy(menuList))
        }, 1000)
    })
}

menu.get = (menuId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = deepCopy(menuList.find(menu => menu.id === menuId))

            resolve(menu)
        })
    })
}

let increasingMenuId = 2

menu.create = (menu) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let newMenu = deepCopy(menu)
            newMenu.id = '' + increasingMenuId++
            menuList.push(newMenu)

            resolve(newMenu.id)
        }, 1000)
    })
}

menu.update = (updatedMenu) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let index = menuList.findIndex(menu => updatedMenu.id === menu.id)
            menuList[index] = deepCopy(updatedMenu)

            resolve()
        }, 1000)
    })
}

menu.change = (menuId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            menuList.forEach(menu => {
                menu.used = menu.id === menuId ? 1 : 0
            })

            resolve()
        }, 1000)
    })
}

menu.delete = (menuId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let index = menuList.findIndex(menu => menu.id === menuId)
            menuList.splice(index, 1)

            resolve()
        }, 1000)
    })
}

let increasingCategoryId = 10

menu.getCategory = (menuId, categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = menuList.find(menu => menu.id === menuId)
            let category = menu.content.find(category => category.id === categoryId)

            resolve(category)
        }, 1000)
    })
}

menu.createCategory = (menuId, category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = menuList.find(menu => menu.id === menuId)
            let newCategory = deepCopy(category)
            newCategory.id = '' + increasingCategoryId++
            menu.content.push(newCategory)

            resolve(newCategory.id)
        }, 1000)
    })
}

menu.deleteCategory = (menuId, categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = menuList.find(menu => menu.id === menuId)
            let categoryIndex = menu.content.findIndex(category => category.id === categoryId)
            menu.content.splice(categoryIndex, 1)

            resolve()
        }, 1000)
    })
}

menu.updateCategory = (menuId, category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = menuList.find(menu => menu.id === menuId)
            let categoryIndex = menu.content.findIndex(storedCategory => storedCategory.id === category.id)
            menu.content[categoryIndex] = deepCopy(category)

            resolve()
        }, 1000)
    })
}

let increasingDishId = 100

menu.getDish = (menuId, categoryId, dishId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = menuList.find(menu => menu.id === menuId)
            let category = menu.content.find(category => category.id === categoryId)
            let dish = category.dishes.find(dish => dish.id === dishId)

            resolve(dish)
        }, 1000)
    })
}

menu.createDish = (menuId, categoryId, dish) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = menuList.find(menu => menu.id === menuId)
            let category = menu.content.find(category => category.id === categoryId)
            let newDish = deepCopy(dish)
            newDish.id = '' + increasingDishId++
            category.dishes.push(newDish)

            resolve(newDish.id)
        }, 1000)
    })
}

menu.deleteDish = (menuId, categoryId, dishId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = menuList.find(menu => menu.id === menuId)
            let category = menu.content.find(category => category.id === categoryId)
            let dishIndex = category.dishes.findIndex(dish => dish.id === dishId)

            category.dishes.splice(dishIndex, 1)

            resolve()
        }, 1000)
    })
}

menu.updateDish = (menuId, categoryId, dish) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let menu = menuList.find(menu => menu.id === menuId)
            let category = menu.content.find(category => category.id === categoryId)
            let dishIndex = category.dishes.findIndex(storeDish => storeDish.id === dish.id)
            category.dishes[dishIndex] = deepCopy(dish)

            resolve()
        }, 1000)
    })
}

export default menu
