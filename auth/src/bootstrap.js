import { createApp } from 'vue'
import App from './App'

export const mount = (el) => {
  const app = createApp(App)
  app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-root')

  if (devRoot) {
    mount(devRoot)
  }
}
