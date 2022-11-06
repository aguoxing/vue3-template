import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

import useStore from '@/store'

const Layout = () => import('@/layout/index.vue')

/**
 * https://router.vuejs.org/zh/guide/
 */
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: { hidden: true }
  },
  {
    path: '/register',
    component: () => import('@/views/register.vue'),
    meta: { hidden: true }
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('@/views/error/404'),
    meta: {hidden: true}
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '401',
    component: () => import('@/views/error/401.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/index.vue'),
        name: 'Index',
        meta: { title: '首页', icon: 'homepage', affix: true }
      },
    ]
  }
]

// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 重置路由
export function resetRouter() {
  const { permission } = useStore()
  permission.routes.forEach((route) => {
    const name = route.name
    if (name && router.hasRoute(name)) {
      router.removeRoute(name)
    }
  })
}

export default router
