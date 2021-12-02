import { createApp } from 'vue'
import App from './App'
import { webHistoryRouter, memoryHistoryRouter } from './router'

export const mount = (el, { onLogin, defaultRouter, syncParentRouter }) => {
  const props = {
    onLogin,
    syncParentRouter
  }
  const app = createApp(App, props)
  app.use(defaultRouter || memoryHistoryRouter)
  app.mount(el)

  return {
    onParentNavigate() {}
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
