import lazy from './lazyComponent'

/**
 * @desc 路由
 * @typedef Route
 * @property {string} title: 标题名称
 * @property {any} icon: 图标
 * @property {string} path: 路由
 * @property {string} name: 唯一名称
 * @property {any} component: 组件
 * @property {Array<Route>} children: 子路由
 * @property {Object} meta: 扩展字段
 */

const Home = lazy(() => import('@/pages/Home'))

export const publicRoutes = [
  {
    title: '概览',
    name: 'overview',
    path: '/',
    icon: 'home',
    component: Home,
    hide: true,
    meta: {},
  },
]

export const writeRoutes = []

/**
 * @type {Array[Route]}
 */
export const routes = [
  ...publicRoutes,
]

/**
 * @description
 * @param {Array<Route>} array
 * @param {Route | null} parent
 * @returns {Array<Route>}
 * @constructor
 */
export const flattenRoutes = (array, parent = null) => {
  return [].concat(
    ...array.map((route) => {
      const newRoute = {...route, parent}
      const selfRoute = route.component && route.path ? [newRoute] : []
      if (route.children && route.children.length) {
        return [...selfRoute, ...flattenRoutes(route.children, newRoute)]
      }
      return selfRoute
    })
  )
}


export const RouteMap = () => {
  return flattenRoutes(routes, null)
}

export const SiderMenuRouteMap = () => {
  return routes
}
