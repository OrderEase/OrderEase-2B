import Order from '@/api/order.js'

const state = {
    ordersList: []
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
        })
        state.ordersList = ordersList
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
