import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from './services/cookieStorageManager'
import Auth from './views/Auth'

const middlewares = {
  auth(to, from, next) {
    if (!getToken()) {
      next('/login')
    }
    next()
  },
  redirectToHome(to, from, next) {
    if (getToken()) {
      next('/')
    }
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'marketplace'
  },
  {
    path: '/login',
    name: 'login',
    component: Auth,
    beforeEnter: middlewares.redirectToHome,
    meta: {
      layout: 'AppLayoutDefault'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Auth,
    beforeEnter: middlewares.redirectToHome,
    meta: {
      layout: 'AppLayoutDefault'
    }
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: () => import('./views/Marketplace'),
    beforeEnter: middlewares.auth,
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('./views/Profile'),
    beforeEnter: middlewares.auth,
    meta: {
      layout: 'AppLayoutHome'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
