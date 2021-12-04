import { loadModule } from './index'

const namespace = 'profile'
const module = './ProfileApp'

const urls = {
  dev: 'http://localhost:8083/',
  prod: ''
}

const environment = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

export const profile = {
  bootstrap: async () => {
    if (profile.mount) return profile.mount
    const { mount } = await loadModule(
      `${urls[environment]}remoteEntry.js`,
      namespace,
      module
    )
    profile.mount = mount
    return mount
  },
  mount: null
}
