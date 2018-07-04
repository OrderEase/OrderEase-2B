import Order from '@/api/order.js'
import Util from '@/libs/util.js'

const state = {
    ordersList: [],
    unFinishedOrdersList: []
}

const actions = {
    async getOrdersList ({ commit }) {
        let ordersList = await Order.getAll()
        commit('setOrdersList', ordersList)
    },
    async getUnFinishedOrdersList ({ commit }) {
        let unFinishedOrdersList = await Order.getAll({ finished: 0 })
        commit('setUnFinishedOrdersList', unFinishedOrdersList)
    },
    async finishOrderItems ({ commit }, specialOrder) {
        let date = Util.formatDate(new Date())

        for (let item of specialOrder.repackDishes) {
            await Order.finishOrderItem(specialOrder.id, {
                orderItemId: item.orderItem.id,
                finished: 1,
                time: date
            })
        }
    }
}

const processOrdersList = (ordersList, expand = false) => {
    ordersList.forEach(order => {
        if (expand) {
            order._expanded = true
        }

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
}

const mutations = {
    setOrdersList (state, ordersList) {
        processOrdersList(ordersList)
        state.ordersList = ordersList
    },
    setUnFinishedOrdersList (state, unFinishedOrdersList) {
        processOrdersList(unFinishedOrdersList, true)
        state.unFinishedOrdersList = unFinishedOrdersList
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
