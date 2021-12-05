import { createApp } from 'vue'
import App from './App'

export const mount = (el, { sharedData }) => {
  const props = {
    sharedData
  }
  const app = createApp(App, props)
  app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_profile-root')

  if (el) {
    mount(el, { sharedData: { me: { first_name: 'John' }}})
  }
}
