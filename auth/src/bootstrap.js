import { createApp } from 'vue'
import App from './App'
import { webHistoryRouter, memoryHistoryRouter } from './router'
import { logout } from '../services/api'

export const mount = (el, { onLogin, defaultRouter, syncParentRouter }) => {
  const props = {
    onLogin,
    syncParentRouter
  }
  const router = defaultRouter || memoryHistoryRouter
  const app = createApp(App, props)
  app.use(router)
  app.mount(el)

  return {
    syncChildRouter(route) {
      void router.push(route)
    },
    async onLogout() {
      await logout()
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-root')

  if (devRoot) {
    mount(devRoot, {
      onLogin: () => ({}),
      defaultRouter: webHistoryRouter,
      syncParentRouter: () => ({}),
    })
  }
}
