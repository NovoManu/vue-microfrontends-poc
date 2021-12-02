import { createApp } from 'vue'
import App from './App'
import router from './router'

export const mount = (el, { onLogin }) => {
  App.methods = {
    onLogin
  }
  const app = createApp(App, { onLogin })
  app.use(router)
  app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-root')

  if (devRoot) {
    mount(devRoot, { onLogin: ()=> {}})
  }
}
