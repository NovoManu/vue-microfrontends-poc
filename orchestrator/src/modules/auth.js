import { loadModule } from './index'

const namespace = 'auth'
const module = './AuthApp'

const urls = {
  dev: 'http://localhost:8081/',
  prod: ''
}

const environment = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

export const auth = {
  bootstrap: async () => {
    if (auth.mount) return auth.mount
    const { mount } = await loadModule(
      `${urls[environment]}remoteEntry.js`,
      namespace,
      module
    )
    auth.mount = mount
    return mount
  },
  mount: null
}
