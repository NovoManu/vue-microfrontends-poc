import { createRouter, createMemoryHistory } from 'vue-router'
import Login from './components/Login'

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
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
