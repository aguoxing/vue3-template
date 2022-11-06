import { PermissionState } from '@/types/store/permission'
import { RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'
import { constantRoutes } from '@/router'
import { listRoutes } from '@/api/auth'

export const Layout = () => import('@/layout/index.vue')
export const ParentView = () => import('@/components/ParentView')
export const InnerLink = () => import('@/layout/components/InnerLink')

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    if (roles.includes('ROOT')) {
      return true
    }
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        return (route.meta.roles as string[]).includes(role)
      }
    })
  }
  return false
}

export const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const r = { ...route } as any
    if (hasPermission(roles, r)) {
      if (r.component == 'Layout') {
        r.component = Layout
      } else if (r.component === 'ParentView') {
        r.component = ParentView
      } else if (r.component === 'InnerLink') {
        r.component = InnerLink
      } else {
        r.component = loadView(route.component)
      }
      res.push(r)

      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
    }
  })
  return res
}

const usePermissionStore = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    routes: [],
    addRoutes: []
  }),
  actions: {
    setRoutes(routes: RouteRecordRaw[]) {
      this.addRoutes = routes
      this.routes = constantRoutes.concat(routes)
    },
    generateRoutes(roles: string[]) {
      return new Promise((resolve, reject) => {
        listRoutes()
          .then((response) => {
            const asyncRoutes = response.data
            const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            this.setRoutes(accessedRoutes)
            resolve(accessedRoutes)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
})

export const loadView = (view) => {
  let res;
  for (const path in modules) {
    const dir = path.split('views/')[1].split('.vue')[0];
    if (dir === view) {
      res = () => modules[path]();
    }
  }
  return res;
}

export default usePermissionStore
