import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e8faeb9 = () => interopDefault(import('..\\pages\\Calendario.vue' /* webpackChunkName: "pages/Calendario" */))
const _260ddf93 = () => interopDefault(import('..\\pages\\DashboardAsistente.vue' /* webpackChunkName: "pages/DashboardAsistente" */))
const _eb1acafe = () => interopDefault(import('..\\pages\\dashboardCitas.vue' /* webpackChunkName: "pages/dashboardCitas" */))
const _f08c98b2 = () => interopDefault(import('..\\pages\\dashboardMarketing.vue' /* webpackChunkName: "pages/dashboardMarketing" */))
const _62cadee3 = () => interopDefault(import('..\\pages\\DashboardMensajes.vue' /* webpackChunkName: "pages/DashboardMensajes" */))
const _82fee706 = () => interopDefault(import('..\\pages\\DashboardNoticias.vue' /* webpackChunkName: "pages/DashboardNoticias" */))
const _2ca7f475 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _658059e6 = () => interopDefault(import('..\\pages\\paciente.vue' /* webpackChunkName: "pages/paciente" */))
const _70b68fb7 = () => interopDefault(import('..\\pages\\calendario\\barracalendar.vue' /* webpackChunkName: "pages/calendario/barracalendar" */))
const _7ff8fb89 = () => interopDefault(import('..\\pages\\calendario\\calendarchico.vue' /* webpackChunkName: "pages/calendario/calendarchico" */))
const _1418b8a4 = () => interopDefault(import('..\\pages\\calendario\\CalendarioMes.vue' /* webpackChunkName: "pages/calendario/CalendarioMes" */))
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
    path: "/DashboardAsistente",
    component: _260ddf93,
    name: "DashboardAsistente"
  }, {
    path: "/dashboardCitas",
    component: _eb1acafe,
    name: "dashboardCitas"
  }, {
    path: "/dashboardMarketing",
    component: _f08c98b2,
    name: "dashboardMarketing"
  }, {
    path: "/DashboardMensajes",
    component: _62cadee3,
    name: "DashboardMensajes"
  }, {
    path: "/DashboardNoticias",
    component: _82fee706,
    name: "DashboardNoticias"
  }, {
    path: "/inspire",
    component: _2ca7f475,
    name: "inspire"
  }, {
    path: "/paciente",
    component: _658059e6,
    name: "paciente"
  }, {
    path: "/calendario/barracalendar",
    component: _70b68fb7,
    name: "calendario-barracalendar"
  }, {
    path: "/calendario/calendarchico",
    component: _7ff8fb89,
    name: "calendario-calendarchico"
  }, {
    path: "/calendario/CalendarioMes",
    component: _1418b8a4,
    name: "calendario-CalendarioMes"
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
