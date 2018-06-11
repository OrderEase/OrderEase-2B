import Menu from '@/api/menu.js'
import Util from '@/libs/util.js'

const state = {
    menuList: [],
    edittingMenu: {
        name: '',
        used: 0,
        content: []
    }
}

const getters = {
    getMenuById (state) {
        return (id) => {
            return state.menuList.find(menu => menu.id === id)
        }
    }
}

const actions = {
    async getMenuList ({ commit }) {
        commit('setMenuList', await Menu.getAll())
    },
    async createMenu ({ state, dispatch }) {
        let newMenu = await Menu.create(state.edittingMenu)
        state.menuList.push(newMenu)

        await dispatch('app/getDishMenuAndUpdateMenuList', null, { root: true })
        return newMenu
    },
    async updateMenu ({ state, dispatch }) {
        let updatedMenu = await Menu.update(state.edittingMenu)
        let menuInList = state.menuList.find(menu => menu.id === updatedMenu.id)
        Util.deepCopyFromTo(updatedMenu, menuInList)

        await dispatch('app/getDishMenuAndUpdateMenuList', null, { root: true })
    },
    async changeMenu ({ state, dispatch }, menuId) {
        await Menu.change(menuId)
        state.menuList.forEach(menu => {
            menu.used = menu.id === menuId ? 1 : 0
        })
        state.edittingMenu.used = 1
    },
    async deleteMenu ({ dispatch, state }, menuId) {
        await Menu.delete(menuId)
        await dispatch('app/getDishMenuAndUpdateMenuList', null, { root: true })

        let index = state.menuList.findIndex(menu => menu.id === menuId)
        state.menuList.splice(index, 0)
        state.edittingMenu = {}
    },
    async createCategory ({ dispatch, state }, category) {
        try {
            state.edittingMenu.content.push(category)
            await dispatch('updateMenu')
        } catch (err) {
            state.edittingMenu.content.pop()
            throw err
        }
    },
    async deleteCategory ({ dispatch, state }, categoryIndex) {
        let removed = state.edittingMenu.content.splice(categoryIndex, 1)
        try {
            await dispatch('updateMenu')
        } catch (err) {
            state.edittingMenu.content.splice(categoryIndex, 0, removed[0])
            throw err
        }
    }
}

const mutations = {
    setMenuList (state, dishMenuList) {
        state.menuList = dishMenuList
    },
    editMenuById (state, id) {
        state.edittingMenu = state.menuList.find(menu => menu.id === id)
    },
    editEmptyMenu (state) {
        state.edittingMenu = {
            name: '',
            used: 0,
            content: []
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
