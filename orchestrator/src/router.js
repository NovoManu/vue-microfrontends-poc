import { createRouter, createWebHistory } from 'vue-router'
import Auth from './views/Auth'
import Marketplace from './views/Marketplace'
import Profile from './views/Profile'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'marketplace'
  },
  {
    path: '/login',
    name: 'login',
    component: Auth
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: Marketplace
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
