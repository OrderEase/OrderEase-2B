import Main from '@/views/Main.vue'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
}

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
}

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
}

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
}

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {
            path: 'home',
            title: {i18n: 'home'},
            name: 'home_index',
            component: () => import('@/views/home/home.vue')
        }
    ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/menu',
        icon: 'coffee',
        name: 'menu',
        title: '菜单管理',
        access: 'manager',
        component: Main,
        children: [
            {
                path: 'add',
                icon: 'plus',
                name: 'menu_add',
                title: '添加菜单',
                access: 'manager',
                component: () => import('@/views/menu/menu-editor.vue')
            },
            {
                path: ':id',
                name: 'menu_editor',
                title: '编辑菜单',
                access: 'manager',
                component: () => import('@/views/menu/menu-editor.vue')
            }
        ]
    },
    {
        path: '/order',
        icon: 'android-list',
        name: 'order',
        title: '订单管理',
        access: 'manager',
        component: Main,
        children: [
            {
                path: 'index',
                title: '订单管理',
                name: 'order_index',
                component: () => import('@/views/order/order.vue')
            }
        ]
    },
    {
        path: '/promotion',
        icon: 'fireball',
        name: 'promotion',
        title: '活动管理',
        access: 'manager',
        component: Main,
        children: [
            {
                path: 'index',
                title: '活动管理',
                access: 'manager',
                name: 'promotion_index',
                component: () => import('@/views/promotion/promotion.vue')
            }
        ]
    },
    {
        path: '/kitchen',
        icon: 'ios-nutrition',
        name: 'kitchen',
        title: '后厨管理',
        component: Main,
        children: [
            {
                path: 'index',
                title: '后厨管理',
                name: 'kitchen_index',
                component: () => import('@/views/kitchen/kitchen.vue')
            }
        ]
    },
    {
        path: '/analytics',
        icon: 'ios-analytics',
        name: 'analytics',
        title: '营业数据',
        access: 'manager',
        component: Main,
        children: [
            {
                path: 'index',
                title: '营业数据',
                name: 'analytics_index',
                component: () => import('@/views/analytics/analytics.vue')
            }
        ]
    }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
]
