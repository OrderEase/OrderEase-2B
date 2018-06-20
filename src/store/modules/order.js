import Order from '@/api/order.js'
import Util from '@/libs/util.js'

const state = {
    ordersList: []
}

const getters = {
    unFinishedOrdersList (state) {
        return state.ordersList.filter(
            order => {
                order._expanded = true
                return order.isPay === 1 && order.finished === 0
            }
        ).sort((left, right) => {
            let leftDate = new Date(left.payDate)
            let rightDate = new Date(right.payDate)
            return leftDate - rightDate
        })
    }
}

const actions = {
    async getOrdersList ({ commit }) {
        let ordersList = await Order.getAll()
        commit('setOrdersList', ordersList)
    },
    async finishOrderItems ({ commit }, specialOrder) {
        let date = Util.formatDate(new Date())
        let orderItems = specialOrder.repackDishes.map(item => {
            return {
                dishId: item.orderItem.dishId,
                finished: 1,
                time: date
            }
        })
        let editedOrder = {
            id: specialOrder.id,
            finished: 1,
            orderItems: orderItems
        }

        let originalUnFinishedOrderItems = specialOrder.orderItems.filter(item => item.finished === 0)
        originalUnFinishedOrderItems.forEach(item => {
            if (orderItems.findIndex(value => value.dishId === item.dishId) === -1) {
                editedOrder.finished = 0
            }
        })

        await Order.update(editedOrder)
    }
}

const mutations = {
    setOrdersList (state, ordersList) {
        ordersList.forEach(order => {
            if (order.isPay === 1) {
                order.state = order.finished === 1 ? '已完成' : '未完成'
            } else {
                order.state = '未支付'
            }

            order.repackDishes = order.orderItems.map(item => {
                return {
                    dish: order.dishes.find(dish => dish.id === item.dishId),
                    orderItem: item
                }
            })
        })
        state.ordersList = ordersList
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
