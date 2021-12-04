import { createApp } from 'vue'
import App from './App'

export const mount = (el) => {
  const app = createApp(App)
  app.mount(el)

  console.log('profile bootstrap')
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_profile-root')

  if (el) {
    mount(el)
  }
}
