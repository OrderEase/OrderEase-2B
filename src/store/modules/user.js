import Cookies from 'js-cookie'
import User from '@/api/user.js'
import Util from '@/libs/util.js'

const state = {}

const actions = {
    async login ({ commit }, { username, password }) {
        let authority = await User.login(username, password)
        commit('setUser', {
            username,
            password,
            authority
        })
    },
    async logout ({ commit }) {
        await User.logout()
        commit('removeUser')
    },
    async editPassword ({ commit }, { oldPassword, newPassword }) {
        await User.editPassword(oldPassword, newPassword)
        commit('updateCookiesPass', newPassword)
    }
}

const mutations = {
    setUser (state, { username, password, authority }) {
        Cookies.set('user', username)
        Cookies.set('pass', Util.encode(password))
        Cookies.set('access', authority)
    },
    removeUser (state, vm) {
        Cookies.remove('user')
        Cookies.remove('password')
        Cookies.remove('access')
        // 恢复默认样式
        let themeLink = document.querySelector('link[name="theme"]')
        themeLink.setAttribute('href', '')
        // 清空打开的页面等数据，但是保存主题数据
        let theme = ''
        if (localStorage.theme) {
            theme = localStorage.theme
        }
        localStorage.clear()
        if (theme) {
            localStorage.theme = theme
        }
    },
    updateCookiesPass (state, password) {
        Cookies.set('pass', Util.encode(password))
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
