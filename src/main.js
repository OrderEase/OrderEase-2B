import Vue from 'vue'
import iView from 'iview'
import { router } from './router/index'
import { appRouter } from './router/router'
import store from './store'
import App from './app.vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import Cookies from 'js-cookie'
import '@/locale'
import 'iview/dist/styles/iview.css'

Vue.use(VueI18n)
Vue.use(iView)

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.withCredentials = true
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            Cookies.set('user', '')
            // Cookies.set('redirect', router.currentRoute.fullPath)
            router.replace({
                path: '/login'
            })
        }

        return Promise.reject(error)
    }
)

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
