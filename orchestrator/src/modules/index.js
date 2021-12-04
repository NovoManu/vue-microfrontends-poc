const loadScope = (url, scope) => {
  const element = document.createElement('script');
  const promise = new Promise((resolve, reject) => {
    element.src = url
    element.type = 'text/javascript'
    element.async = true
    element.onload = () => resolve(window[scope])
    element.onerror = reject
  })
  document.head.appendChild(element)
  promise.finally(() => document.head.removeChild(element))
  return promise
}

export const loadModule = async (url, namespace, module) => {
  try {
    const container = await loadScope(url, namespace)
    await __webpack_init_sharing__('default')
    await container.init(__webpack_share_scopes__.default)
    const factory = await container.get(module, namespace)
    return factory()
  } catch (error) {
    console.error('Error loading module:', error)
    throw error
  }
}

const urls = {
  auth: {
    dev: 'http://localhost:8081/',
    prod: ''
  },
  marketplace: {
    dev: 'http://localhost:8082/',
    prod: ''
  },
  profile: {
    dev: 'http://localhost:8083/',
    prod: ''
  }
}

const environment = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

const index = {
  auth: {
    bootstrap: async () => {
      const module = 'auth'
      if (index[module].mount) return index[module].mount
      const { mount } = await loadModule(
        `${urls[module][environment]}remoteEntry.js`,
        module,
        './AuthApp'
      )
      index[module].mount = mount
      return mount
    },
    mount: null
  },
  marketplace: {
    bootstrap: async () => {
      const module = 'marketplace'
      if (index[module].mount) return index[module].mount
      const { mount } = await loadModule(
        `${urls[module][environment]}remoteEntry.js`,
        module,
        './MarketplaceApp'
      )
      index[module].mount = mount
      return mount
    },
    mount: null
  },
  profile: {
    bootstrap: async () => {
      const module = 'profile'
      if (index[module].mount) return index[module].mount
      const { mount } = await loadModule(
        `${urls[module][environment]}remoteEntry.js`,
        module,
        './ProfileApp'
      )
      index[module].mount = mount
      return mount
    },
    mount: null
  }
}

export { auth } from './auth'
export { marketplace } from './marketplace'
export { profile } from './profile'
export default index
