import Restaurant from '@/api/restaurant.js'

const state = {
    info: {},
    analytics: {}
}

const actions = {
    async getInfo ({ commit }) {
        let info = await Restaurant.get()
        commit('setInfo', info)
    },
    async update ({ dispatch }, editedInfo) {
        await Restaurant.update(editedInfo)
        await dispatch('getInfo')
    }
}

const mutations = {
    setInfo (state, info) {
        state.info = info
    },
    setAnalytics (state, analyticsInfo) {
        state.analytics = analyticsInfo
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
