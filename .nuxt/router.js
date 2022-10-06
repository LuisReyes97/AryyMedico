import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e8faeb9 = () => interopDefault(import('..\\pages\\Calendario.vue' /* webpackChunkName: "pages/Calendario" */))
const _eb1acafe = () => interopDefault(import('..\\pages\\dashboardCitas.vue' /* webpackChunkName: "pages/dashboardCitas" */))
const _2ca7f475 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _658059e6 = () => interopDefault(import('..\\pages\\paciente.vue' /* webpackChunkName: "pages/paciente" */))
const _2934132d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Calendario",
    component: _6e8faeb9,
    name: "Calendario"
  }, {
    path: "/dashboardCitas",
    component: _eb1acafe,
    name: "dashboardCitas"
  }, {
    path: "/inspire",
    component: _2ca7f475,
    name: "inspire"
  }, {
    path: "/paciente",
    component: _658059e6,
    name: "paciente"
  }, {
    path: "/",
    component: _2934132d,
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
