import Order from '@/api/order.js'
import Util from '@/libs/util.js'

const state = {
    ordersList: []
}

const getters = {
    unFinishedOrdersList (state) {
        return state.ordersList.filter(order => order.finished === 0).sort((left, right) => {
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
