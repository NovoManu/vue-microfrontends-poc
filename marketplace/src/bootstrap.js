import { createApp } from 'vue'
import App from './App'

export const mount = (el) => {
  const app = createApp(App)
  app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketplace-root')

  if (el) {
    mount(el)
  }
}
