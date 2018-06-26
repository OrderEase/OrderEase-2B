import Vue from 'vue'
import iView from 'iview'
import { router } from './router/index'
import { appRouter } from './router/router'
import store from './store'
import App from './app.vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import '@/locale'
import 'iview/dist/styles/iview.css'
import { baseURL } from '@/api/config.js'

Vue.use(VueI18n)
Vue.use(iView)

axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {
        this.currentPageName = this.$route.name
        // 显示打开的页面的列表
        this.$store.commit('app/setOpenedList')
        this.$store.commit('app/initCachepage')
        // 权限菜单过滤相关
        this.$store.dispatch('app/getDishMenuAndUpdateMenuList')
    },
    created () {
        let tagsList = []
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0])
            } else {
                tagsList.push(...item.children)
            }
        })
        this.$store.commit('app/setTagsList', tagsList)
    }
})
