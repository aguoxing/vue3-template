import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        component: Layout,
        redirect: 'home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/Home.vue'),
                meta: {title: '首页', icon: 'dashboard', affix: true}
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/about/index.vue'),
                meta: {title: '关于', icon: 'dashboard', affix: true}
            }
        ]
    }
]

const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由

const router = createRouter({
    history: routerHistory,
    routes: routes
})

export default router