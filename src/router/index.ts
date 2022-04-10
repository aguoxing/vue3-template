import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const homeLayout = () => import('@/layout/index.vue')
const blogLayout = () => import('@/layout/blog.vue')

/**
 * https://router.vuejs.org/zh/guide/
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: '首页',
    component: homeLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '首页',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页', icon: 'dashboard' }
      },
      {
        path: '/blog',
        name: '博客',
        redirect: '/blog/article'
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/Login.vue'),
    meta: { title: '登录', icon: 'dashboard' }
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('@/views/Register.vue'),
    meta: { title: '注册', icon: 'dashboard' }
  },
  {
    path: '/chat',
    name: '聊天',
    component: () => import('@/views/Chat.vue'),
    meta: { title: '聊天', icon: 'dashboard' }
  },
  {
    path: '/blog',
    component: blogLayout,
    redirect: '/blog/article',
    children: [
      {
        path: '/blog/article',
        name: '文章',
        component: () => import('@/views/blog/article/index.vue'),
        meta: { title: '文章', icon: 'dashboard' }
      },
      {
        path: '/blog/category',
        name: '分类',
        component: () => import('@/views/blog/category/index.vue'),
        meta: { title: '分类', icon: 'dashboard' }
      },
      {
        path: '/blog/tags',
        name: '标签',
        component: () => import('@/views/blog/tags/index.vue'),
        meta: { title: '标签', icon: 'dashboard' }
      },
      {
        path: '/blog/timeline',
        name: '归档',
        component: () => import('@/views/blog/timeline/index.vue'),
        meta: { title: '归档', icon: 'dashboard' }
      },
      {
        path: '/blog/about',
        name: '关于',
        component: () => import('@/views/blog/about/index.vue'),
        meta: { title: '关于', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/blog/article',
    component: blogLayout,
    children: [
      {
        path: 'detail/:id',
        component: () => import('@/views/blog/article/detail.vue'),
        name: 'detail',
        meta: { title: '详情', activeMenu: '/blog/article' }
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
