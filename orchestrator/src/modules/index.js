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
    console.log({container})
    await __webpack_init_sharing__('default')
    await container.init(__webpack_share_scopes__.default)
    const factory = await container.get(module, namespace)
    return factory()
  } catch (error) {
    console.error('Error loading module:', error)
    throw error
  }
}

export { auth } from './auth'
export { marketplace } from './marketplace'
export { profile } from './profile'
