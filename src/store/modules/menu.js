import Menu from '@/api/menu.js'
import Util from '@/libs/util.js'

const state = {
    menuList: [],
    edittingMenu: {},
    isSorting: false
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
        commit('resetMenuRank')
    },
    async createMenu ({ state, dispatch }) {
        let menuId = await Menu.create(state.edittingMenu)
        await dispatch('app/getDishMenuAndUpdateMenuList', null, { root: true })

        return menuId
    },
    async updateMenu ({ state, dispatch }) {
        await Menu.update(state.edittingMenu)
        let updatedMenu = await Menu.get(state.edittingMenu.id)

        let menuInList = state.menuList.find(menu => menu.id === updatedMenu.id)
        Util.deepCopyFromTo(updatedMenu, menuInList)

        await dispatch('app/getDishMenuAndUpdateMenuList', null, { root: true })
    },
    async changeMenu ({ state, dispatch }) {
        await Menu.change(state.edittingMenu.id)
        state.menuList.forEach(menu => {
            menu.used = menu.id === state.edittingMenu.id ? 1 : 0
        })
        state.edittingMenu.used = 1
    },
    async deleteMenu ({ dispatch, state }) {
        await Menu.delete(state.edittingMenu.id)
        await dispatch('app/getDishMenuAndUpdateMenuList', null, { root: true })

        let index = state.menuList.findIndex(menu => menu.id === state.edittingMenu.id)
        state.menuList.splice(index, 0)
        state.edittingMenu = {}
    },
    async createCategory ({ dispatch, state }, category) {
        try {
            let categoryId = await Menu.createCategory(state.edittingMenu.id, category)
            let newCategory = await Menu.getCategory(state.edittingMenu.id, categoryId)

            state.edittingMenu.content.push(newCategory)
        } catch (err) {
            state.edittingMenu.content.pop()
            throw err
        }
    },
    async updateCategory ({ dispatch, state }, category) {
        await Menu.updateCategory(state.edittingMenu.id, category)
        let updatedCategory = await Menu.getCategory(state.edittingMenu.id, category.id)

        let categoryIndex = state.edittingMenu.content.findIndex(value => value.id === category.id)
        Object.assign(state.edittingMenu.content[categoryIndex], updatedCategory)
    },
    async deleteCategory ({ dispatch, state }, categoryId) {
        await Menu.deleteCategory(state.edittingMenu.id, categoryId)

        let categoryIndex = state.edittingMenu.content.findIndex(category => category.id === categoryId)
        state.edittingMenu.content.splice(categoryIndex, 1)
    },
    async createDish ({ dispatch, state }, { categoryId, dish }) {
        let dishId = await Menu.createDish(state.edittingMenu.id, categoryId, dish)
        let newDish = await Menu.getDish(state.edittingMenu.id, categoryId, dishId)

        let category = state.edittingMenu.content.find(category => category.id === categoryId)
        category.dishes.push(newDish)
    },
    async updateDish ({ dispatch, state }, { categoryId, dish }) {
        await Menu.updateDish(state.edittingMenu.id, categoryId, dish)

        let category = state.edittingMenu.content.find(category => category.id === categoryId)
        let dishIndex = category.dishes.findIndex(value => value.id === dish.id)
        Object.assign(category.dishes[dishIndex], dish)
    },
    async deleteDish ({ dispatch, state }, { categoryId, dishId }) {
        await Menu.deleteDish(state.edittingMenu.id, categoryId, dishId)

        let category = state.edittingMenu.content.find(category => category.id === categoryId)
        let dishIndex = category.dishes.findIndex(dish => dish.id === dishId)
        category.dishes.splice(dishIndex, 1)
    },
    async saveSort ({ dispatch, state }) {
        let promises = []

        let menuId = state.edittingMenu.id
        state.edittingMenu.content.forEach((category, cidx) => {
            if (category.rank !== cidx) {
                category.rank = cidx
                promises.push(Menu.updateCategory(menuId, category))
            }

            let categoryId = category.id
            category.dishes.forEach((dish, didx) => {
                if (dish.rank !== didx) {
                    dish.rank = didx
                    promises.push(Menu.updateDish(menuId, categoryId, dish))
                }
            })
        })

        await Promise.all(promises)
    }
}

const mutations = {
    setMenuList (state, dishMenuList) {
        state.menuList = dishMenuList
    },
    resetMenuRank (state) {
        let sortFunc = (left, right) => {
            if (left.rank < right.rank) {
                return -1
            } else if (left.rank > right.rank) {
                return 1
            } else {
                return 0
            }
        }

        state.menuList.forEach(menu => {
            menu.content.sort(sortFunc)
            menu.content.forEach(category => {
                category.dishes.sort(sortFunc)
            })
        })
    },
    editMenuById (state, id) {
        state.edittingMenu = state.menuList.find(menu => menu.id === id)
    },
    editEmptyMenu (state) {
        state.edittingMenu = {
            name: '',
            used: 0,
            rank: -1,
            content: []
        }
    },
    startSort (state) {
        state.isSorting = true
    },
    endSort (state) {
        state.isSorting = false
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
