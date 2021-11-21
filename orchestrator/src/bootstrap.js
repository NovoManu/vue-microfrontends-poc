import { createApp } from 'vue'
import App from './App'
import { mount as marketplaceMount } from 'marketplace/MarketplaceApp'
import { mount as profileMount } from 'profile/ProfileApp'

createApp(App).mount('#app')
marketplaceMount('#marketplace')
profileMount('#profile')
