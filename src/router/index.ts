import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        name: '首页',
        component: () => import('@/views/Home.vue'),
        meta: {title: '首页', icon: 'dashboard', affix: true}
    },
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/Login.vue'),
        meta: {title: '登录', icon: 'dashboard', affix: true}
    },
    {
        path: '/register',
        name: '注册',
        component: () => import('@/views/Register.vue'),
        meta: {title: '注册', icon: 'dashboard', affix: true}
    },
    {
        path: '/chat',
        name: '聊天',
        component: () => import('@/views/Chat.vue'),
        meta: {title: '聊天', icon: 'dashboard', affix: true}
    },
    {
        path: '/blog',
        component: Layout,
        redirect: 'article',
        children: [
            {
                path: '/blog/article',
                name: '文章',
                component: () => import('@/views/blog/article/index.vue'),
                meta: {title: '文章', icon: 'dashboard', affix: true}
            },
            {
                path: '/blog/category',
                name: '分类',
                component: () => import('@/views/blog/category/index.vue'),
                meta: {title: '分类', icon: 'dashboard', affix: true}
            },
            {
                path: '/blog/timeline',
                name: '归档',
                component: () => import('@/views/blog/timeline/index.vue'),
                meta: {title: '归档', icon: 'dashboard', affix: true}
            },
            {
                path: '/blog/about',
                name: '关于',
                component: () => import('@/views/blog/about/index.vue'),
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