import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38d49f0e = () => interopDefault(import('..\\pages\\Calendario.vue' /* webpackChunkName: "pages/Calendario" */))
const _61c8aa30 = () => interopDefault(import('..\\pages\\DashboardAsistente.vue' /* webpackChunkName: "pages/DashboardAsistente" */))
const _65254f54 = () => interopDefault(import('..\\pages\\dashboardCitas.vue' /* webpackChunkName: "pages/dashboardCitas" */))
const _30c77efc = () => interopDefault(import('..\\pages\\dashboardMarketing.vue' /* webpackChunkName: "pages/dashboardMarketing" */))
const _48485624 = () => interopDefault(import('..\\pages\\DashboardMensajes.vue' /* webpackChunkName: "pages/DashboardMensajes" */))
const _37918288 = () => interopDefault(import('..\\pages\\DashboardNoticias.vue' /* webpackChunkName: "pages/DashboardNoticias" */))
const _1ea7ec40 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _9901490a = () => interopDefault(import('..\\pages\\paciente.vue' /* webpackChunkName: "pages/paciente" */))
const _6b4fccc3 = () => interopDefault(import('..\\pages\\auth\\formLogin.vue' /* webpackChunkName: "pages/auth/formLogin" */))
const _363f6027 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _b1f80650 = () => interopDefault(import('..\\pages\\auth\\registerComponent.vue' /* webpackChunkName: "pages/auth/registerComponent" */))
const _093b6a7c = () => interopDefault(import('..\\pages\\calendario\\barracalendar.vue' /* webpackChunkName: "pages/calendario/barracalendar" */))
const _0aa4b694 = () => interopDefault(import('..\\pages\\calendario\\calendarchico.vue' /* webpackChunkName: "pages/calendario/calendarchico" */))
const _fec1428e = () => interopDefault(import('..\\pages\\calendario\\CalendarioMes.vue' /* webpackChunkName: "pages/calendario/CalendarioMes" */))
const _69616822 = () => interopDefault(import('..\\pages\\patient\\patientView.vue' /* webpackChunkName: "pages/patient/patientView" */))
const _8454fc90 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _38d49f0e,
    name: "Calendario"
  }, {
    path: "/DashboardAsistente",
    component: _61c8aa30,
    name: "DashboardAsistente"
  }, {
    path: "/dashboardCitas",
    component: _65254f54,
    name: "dashboardCitas"
  }, {
    path: "/dashboardMarketing",
    component: _30c77efc,
    name: "dashboardMarketing"
  }, {
    path: "/DashboardMensajes",
    component: _48485624,
    name: "DashboardMensajes"
  }, {
    path: "/DashboardNoticias",
    component: _37918288,
    name: "DashboardNoticias"
  }, {
    path: "/inspire",
    component: _1ea7ec40,
    name: "inspire"
  }, {
    path: "/paciente",
    component: _9901490a,
    name: "paciente"
  }, {
    path: "/auth/formLogin",
    component: _6b4fccc3,
    name: "auth-formLogin"
  }, {
    path: "/auth/login",
    component: _363f6027,
    name: "auth-login"
  }, {
    path: "/auth/registerComponent",
    component: _b1f80650,
    name: "auth-registerComponent"
  }, {
    path: "/calendario/barracalendar",
    component: _093b6a7c,
    name: "calendario-barracalendar"
  }, {
    path: "/calendario/calendarchico",
    component: _0aa4b694,
    name: "calendario-calendarchico"
  }, {
    path: "/calendario/CalendarioMes",
    component: _fec1428e,
    name: "calendario-CalendarioMes"
  }, {
    path: "/patient/patientView",
    component: _69616822,
    name: "patient-patientView"
  }, {
    path: "/",
    component: _8454fc90,
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
