import { loadModule } from './index'

const namespace = 'marketplace'
const module = './MarketplaceApp'

const urls = {
  dev: 'http://localhost:8082/',
  prod: ''
}

const environment = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

export const marketplace = {
  bootstrap: async () => {
    if (marketplace.mount) return marketplace.mount
    const { mount } = await loadModule(
      `${urls[environment]}remoteEntry.js`,
      namespace,
      module
    )
    marketplace.mount = mount
    return mount
  },
  mount: null
}
