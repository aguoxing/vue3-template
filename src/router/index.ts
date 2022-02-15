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
                name: '首页',
                component: () => import('@/views/Home.vue'),
                meta: {title: '首页', icon: 'dashboard', affix: true}
            },
            {
                path: '/article',
                name: '文章',
                component: () => import('@/views/article/index.vue'),
                meta: {title: '文章', icon: 'dashboard', affix: true}
            },
            {
                path: '/category',
                name: '分类',
                component: () => import('@/views/category/index.vue'),
                meta: {title: '分类', icon: 'dashboard', affix: true}
            },
            {
                path: '/timeline',
                name: '时间轴',
                component: () => import('@/views/timeline/index.vue'),
                meta: {title: '时间轴', icon: 'dashboard', affix: true}
            },
            {
                path: '/about',
                name: '关于',
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