import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Login from './components/Login'
import Signup from './components/Signup'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  }
]

export const memoryHistoryRouter = createRouter({
  history: createMemoryHistory('login'),
  routes
})

export const webHistoryRouter = createRouter({
  history: createWebHistory(),
  routes
})
