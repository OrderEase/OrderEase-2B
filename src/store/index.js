import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import menu from './modules/menu'
import promotion from './modules/promotion'
import order from './modules/order'
import restaurant from './modules/restaurant'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        app,
        user,
        menu,
        promotion,
        order,
        restaurant
    }
})

export default store
