import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'marketplace'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Auth'),
    meta: {
      layout: 'AppLayoutDefault'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('./views/Auth'),
    meta: {
      layout: 'AppLayoutDefault'
    }
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: () => import('./views/Marketplace'),
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('./views/Profile'),
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
