import { createApp } from 'vue'
import App from './App'
// import { mount as AuthMount } from 'auth/AuthApp'
// import { mount as MarketplaceMount } from 'marketplace/MarketplaceApp'
// import { mount as ProfileMount } from 'profile/ProfileApp'
import router from './router'

const loadedApps = {}

const loadModule = async (module, root) => {
  try {
    const auth = await module
    auth.mount(`#${root}`)
    loadedApps[root] = true
  } catch (e) {
    console.log(e)
    console.log(`Could not load module ${module}`)
    loadedApps[root] = false
  }
}

export const getLoadedApp = (app) => loadedApps[app]

createApp(App)
  .use(router)
  .mount('#app')

// AuthMount('#auth')
// MarketplaceMount('#marketplace')
// ProfileMount('#profile')

// void loadModule(import('auth/AuthApp'), 'auth')
// void loadModule(import('marketplace/MarketplaceApp'), 'marketplace')
// void loadModule(import('profile/ProfileApp'), 'profile')
