import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fc2bb5ee = () => interopDefault(import('..\\pages\\tasks\\_id\\index.vue' /* webpackChunkName: "pages/tasks/_id/index" */))
const _4c64b923 = () => interopDefault(import('..\\pages\\tasks\\_id\\edit.vue' /* webpackChunkName: "pages/tasks/_id/edit" */))
const _278e97f5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/tasks/:id",
    component: _fc2bb5ee,
    name: "tasks-id"
  }, {
    path: "/tasks/:id?/edit",
    component: _4c64b923,
    name: "tasks-id-edit"
  }, {
    path: "/",
    component: _278e97f5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
