import axios from 'axios'
import env from '../../build/env'

let util = {

}

util.title = function (title) {
    title = title || 'OrderEase'
    window.document.title = title
}

const ajaxUrl = env === 'development'
    ? 'http://127.0.0.1:8888'
    : env === 'production'
        ? 'https://www.url.com'
        : 'https://debug.url.com'

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
})

util.inOf = function (arr, targetArr) {
    let res = true
    arr.forEach(item => {
        if (targetArr.indexOf(item) < 0) {
            res = false
        }
    })
    return res
}

util.oneOf = function (ele, targetArr) {
    if (targetArr.indexOf(ele) >= 0) {
        return true
    } else {
        return false
    }
}

util.showThisRoute = function (itAccess, currentAccess) {
    if (typeof itAccess === 'object' && Array.isArray(itAccess)) {
        return util.oneOf(currentAccess, itAccess)
    } else {
        return itAccess === currentAccess
    }
}

util.getRouterObjByName = function (routers, name) {
    if (!name || !routers || !routers.length) {
        return null
    }
    // debugger
    let routerObj = null
    for (let item of routers) {
        if (item.name === name) {
            return item
        }
        routerObj = util.getRouterObjByName(item.children, name)
        if (routerObj) {
            return routerObj
        }
    }
    return null
}

util.handleTitle = function (vm, item) {
    if (typeof item.title === 'object') {
        return vm.$t(item.title.i18n)
    } else {
        return item.title
    }
}

util.setCurrentPath = function (vm, name) {
    let title = ''
    let isOtherRouter = false
    vm.$store.state.app.routers.forEach(item => {
        if (item.children.length === 1) {
            if (item.children[0].name === name) {
                title = util.handleTitle(vm, item)
                if (item.name === 'otherRouter') {
                    isOtherRouter = true
                }
            }
        } else {
            item.children.forEach(child => {
                if (child.name === name) {
                    title = util.handleTitle(vm, child)
                    if (item.name === 'otherRouter') {
                        isOtherRouter = true
                    }
                }
            })
        }
    })
    let currentPathArr = []
    if (name === 'home_index') {
        currentPathArr = [
            {
                title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.app.routers, 'home_index')),
                path: '',
                name: 'home_index'
            }
        ]
    } else if ((name.indexOf('_index') >= 0 || isOtherRouter) && name !== 'home_index') {
        currentPathArr = [
            {
                title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.app.routers, 'home_index')),
                path: '/home',
                name: 'home_index'
            },
            {
                title: title,
                path: '',
                name: name
            }
        ]
    } else {
        let currentPathObj = vm.$store.state.app.routers.filter(item => {
            if (item.children.length <= 1) {
                return item.children[0].name === name
            } else {
                let i = 0
                let childArr = item.children
                let len = childArr.length
                while (i < len) {
                    if (childArr[i].name === name) {
                        return true
                    }
                    i++
                }
                return false
            }
        })[0]
        if (currentPathObj.children.length <= 1 && currentPathObj.name === 'home') {
            currentPathArr = [
                {
                    title: '首页',
                    path: '',
                    name: 'home_index'
                }
            ]
        } else if (currentPathObj.children.length <= 1 && currentPathObj.name !== 'home') {
            currentPathArr = [
                {
                    title: '首页',
                    path: '/home',
                    name: 'home_index'
                },
                {
                    title: currentPathObj.title,
                    path: '',
                    name: name
                }
            ]
        } else {
            let childObj = currentPathObj.children.filter((child) => {
                return child.name === name
            })[0]
            currentPathArr = [
                {
                    title: '首页',
                    path: '/home',
                    name: 'home_index'
                },
                {
                    title: currentPathObj.title,
                    path: '',
                    name: currentPathObj.name
                },
                {
                    title: childObj.title,
                    path: currentPathObj.path + '/' + childObj.path,
                    name: name
                }
            ]
        }
    }
    vm.$store.commit('app/setCurrentPath', currentPathArr)

    return currentPathArr
}

util.openNewPage = function (vm, name, argu, query) {
    let pageOpenedList = vm.$store.state.app.pageOpenedList
    let openedPageLen = pageOpenedList.length
    let i = 0
    let tagHasOpened = false
    while (i < openedPageLen) {
        if (name === pageOpenedList[i].name) { // 页面已经打开
            vm.$store.commit('app/pageOpenedList', {
                index: i,
                argu: argu,
                query: query
            })
            tagHasOpened = true
            break
        }
        i++
    }
    if (!tagHasOpened) {
        let tag = vm.$store.state.app.tagsList.filter((item) => {
            if (item.children) {
                return name === item.children[0].name
            } else {
                return name === item.name
            }
        })
        tag = tag[0]
        if (tag) {
            tag = tag.children ? tag.children[0] : tag
            if (argu) {
                tag.argu = argu
            }
            if (query) {
                tag.query = query
            }
            vm.$store.commit('app/increateTag', tag)
        }
    }
    vm.$store.commit('app/setCurrentPageName', name)
}

util.toDefaultPage = function (routers, name, route, next) {
    let len = routers.length
    let i = 0
    let notHandle = true
    while (i < len) {
        if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
            route.replace({
                name: routers[i].children[0].name
            })
            notHandle = false
            next()
            break
        }
        i++
    }
    if (notHandle) {
        next()
    }
}

util.fullscreenEvent = function (vm) {
    vm.$store.commit('app/initCachepage')
    // 权限菜单过滤相关
    vm.$store.dispatch('getDishMenuAndUpdateMenuList')
    // 全屏相关
}

util.deepCopy = function (data) {
    return JSON.parse(JSON.stringify(data))
}

util.deepCopyFromTo = function (from, to) {
    for (let key in from) {
        to[key] = JSON.parse(JSON.stringify(from[key]))
    }
}

util.exchangeObject = function (left, right) {
    for (let key in left) {
        let temp = left[key]

        left[key] = right[key]
        right[key] = temp
    }
}

util.routerAddDishMenuList = function (router, dishMenuList) {
    router.map(item => {
        if (item.name === 'menu') {
            item.children.pop()

            dishMenuList.map(dishMenu => {
                item.children.splice(item.children.length - 1, 0, {
                    title: dishMenu.name,
                    id: dishMenu.id,
                    name: 'menu-editor-' + dishMenu.id
                })
            })
        }
    })

    return router
}

util.isDishMenu = name => {
    return /menu-editor-(\d+)/.test(name)
}

util.getDishMenuIDFromName = name => {
    let match = /(menu-editor)-(\d+)/.exec(name)
    return {
        routerName: match[1],
        id: match[2]
    }
}

export default util
