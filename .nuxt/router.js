import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20132ba7 = () => interopDefault(import('..\\pages\\Calendario.vue' /* webpackChunkName: "pages/Calendario" */))
const _bc16e2fe = () => interopDefault(import('..\\pages\\DashboardAsistente.vue' /* webpackChunkName: "pages/DashboardAsistente" */))
const _ba1c1f22 = () => interopDefault(import('..\\pages\\dashboardCitas.vue' /* webpackChunkName: "pages/dashboardCitas" */))
const _03a06295 = () => interopDefault(import('..\\pages\\dashboardMarketing.vue' /* webpackChunkName: "pages/dashboardMarketing" */))
const _2cfb9a35 = () => interopDefault(import('..\\pages\\DashboardMensajes.vue' /* webpackChunkName: "pages/DashboardMensajes" */))
const _ee9d7062 = () => interopDefault(import('..\\pages\\DashboardNoticias.vue' /* webpackChunkName: "pages/DashboardNoticias" */))
const _0b4d6372 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4dfa3a54 = () => interopDefault(import('..\\pages\\paciente.vue' /* webpackChunkName: "pages/paciente" */))
const _465e37ca = () => interopDefault(import('..\\pages\\auth\\formLogin.vue' /* webpackChunkName: "pages/auth/formLogin" */))
const _36d266ae = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _3c5670df = () => interopDefault(import('..\\pages\\auth\\registerComponent.vue' /* webpackChunkName: "pages/auth/registerComponent" */))
const _f4304dee = () => interopDefault(import('..\\pages\\calendario\\barracalendar.vue' /* webpackChunkName: "pages/calendario/barracalendar" */))
const _d5ab764a = () => interopDefault(import('..\\pages\\calendario\\calendarchico.vue' /* webpackChunkName: "pages/calendario/calendarchico" */))
const _0b24ed00 = () => interopDefault(import('..\\pages\\calendario\\CalendarioMes.vue' /* webpackChunkName: "pages/calendario/CalendarioMes" */))
const _4b7dad48 = () => interopDefault(import('..\\pages\\patient\\patientView.vue' /* webpackChunkName: "pages/patient/patientView" */))
const _5e948d02 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _20132ba7,
    name: "Calendario"
  }, {
    path: "/DashboardAsistente",
    component: _bc16e2fe,
    name: "DashboardAsistente"
  }, {
    path: "/dashboardCitas",
    component: _ba1c1f22,
    name: "dashboardCitas"
  }, {
    path: "/dashboardMarketing",
    component: _03a06295,
    name: "dashboardMarketing"
  }, {
    path: "/DashboardMensajes",
    component: _2cfb9a35,
    name: "DashboardMensajes"
  }, {
    path: "/DashboardNoticias",
    component: _ee9d7062,
    name: "DashboardNoticias"
  }, {
    path: "/inspire",
    component: _0b4d6372,
    name: "inspire"
  }, {
    path: "/paciente",
    component: _4dfa3a54,
    name: "paciente"
  }, {
    path: "/auth/formLogin",
    component: _465e37ca,
    name: "auth-formLogin"
  }, {
    path: "/auth/login",
    component: _36d266ae,
    name: "auth-login"
  }, {
    path: "/auth/registerComponent",
    component: _3c5670df,
    name: "auth-registerComponent"
  }, {
    path: "/calendario/barracalendar",
    component: _f4304dee,
    name: "calendario-barracalendar"
  }, {
    path: "/calendario/calendarchico",
    component: _d5ab764a,
    name: "calendario-calendarchico"
  }, {
    path: "/calendario/CalendarioMes",
    component: _0b24ed00,
    name: "calendario-CalendarioMes"
  }, {
    path: "/patient/patientView",
    component: _4b7dad48,
    name: "patient-patientView"
  }, {
    path: "/",
    component: _5e948d02,
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
