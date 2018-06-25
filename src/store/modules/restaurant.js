import Restaurant from '@/api/restaurant.js'
import Analytics from '@/api/analytics.js'

const state = {
    info: {},
    analytics: {},
    summary: []
}

const actions = {
    async getInfo ({ commit }) {
        let info = await Restaurant.get()
        commit('setInfo', info)
    },
    async update ({ dispatch }, editedInfo) {
        await Restaurant.update(editedInfo)
        await dispatch('getInfo')
    },
    async getSevenDaysTurnover ({ commit }) {
        let turnover = await Analytics.get({ field: 'turnover', days: 7 })
        commit('setTurnover', turnover)
    },
    async getThirtyDaysTurnover ({ commit }) {
        let turnover = await Analytics.get({ field: 'turnover', days: 30 })
        commit('setTurnover', turnover)
    },
    async getSummary ({ commit }) {
        let summary = await Analytics.get({ field: 'summary' })
        commit('setSummary', summary)
    }
}

const mutations = {
    setInfo (state, info) {
        state.info = info
    },
    setAnalytics (state, analyticsInfo) {
        state.analytics = analyticsInfo
    },
    setTurnover (state, turnover) {
        state.analytics.turnover = turnover
    },
    setSummary (state, summary) {
        state.summary = summary
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
