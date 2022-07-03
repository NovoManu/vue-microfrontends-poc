import { createApp } from 'vue'
import App from './App'

export const mount = (el, { sharedData }) => {
  const props = {
    sharedData
  }
  const app = createApp(App, props)
  app.mount(el)
  console.log('marketplace bootstrap')
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketplace-root')

  if (el) {
    mount(el)
  }
}
