import Vue from 'vue'
import Util from '@/libs/util.js'
import Promotion from '@/api/promotion.js'

const state = {
    promotionsList: []
}

const getters = {

}

const actions = {
    async getPromotionsList ({ commit }) {
        let promotionsList = await Promotion.getAll()
        commit('setPromotionsList', promotionsList)
    },
    async createPromotion ({ commit }, promotion) {
        let filtedPromotion = Util.deepCopy(promotion)
        filtedPromotion.rules.splice(0, filtedPromotion.rules.length)

        let promotionId = await Promotion.create(filtedPromotion)
        let rulesPromises = promotion.rules.map(rule => Promotion.createRule(promotionId, rule))
        await Promise.all(rulesPromises)

        let newPromotion = await Promotion.get(promotionId)
        commit('addPromotion', newPromotion)
    },
    async updatePromotion ({ commit }, { promotion, deletedRules }) {
        await Promotion.update(promotion)

        let rulesPromises = []
        deletedRules.forEach(rule => {
            if (rule.id) {
                rulesPromises.push(Promotion.deleteRule(promotion.id, rule.id))
            }
        })
        promotion.rules.forEach(rule => {
            if (rule.id) {
                rulesPromises.push(Promotion.updateRule(promotion.id, rule))
            } else {
                rulesPromises.push(Promotion.createRule(promotion.id, rule))
            }
        })
        await Promise.all(rulesPromises)

        let updatedPromotion = await Promotion.get(promotion.id)
        commit('updatePromotion', updatedPromotion)
    },
    async deletePromotion ({ commit }, promotion) {
        let rulesPromises = []
        promotion.rules.forEach(rule => {
            if (rule.id) {
                rulesPromises.push(Promotion.deleteRule(promotion.id, rule.id))
            }
        })
        await Promise.all(rulesPromises)
        await Promotion.delete(promotion.id)
        commit('removePromotion', promotion)
    }
}

const mutations = {
    setPromotionsList (state, promotionsList) {
        state.promotionsList = promotionsList
    },
    addPromotion (state, promotion) {
        state.promotionsList.push(promotion)
    },
    updatePromotion (state, promotion) {
        let idx = state.promotionsList.findIndex(value => value.id === promotion.id)
        state.promotionsList[idx] = promotion
        Vue.set(state.promotionsList, idx, promotion)
    },
    removePromotion (state, promotion) {
        let idx = state.promotionsList.findIndex(value => value.id === promotion.id)
        state.promotionsList.splice(idx, 1)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
