import { createApp } from 'vue'
import App from './App'
import { mount as profileMount } from 'profile/ProfileApp'

createApp(App).mount('#app')
profileMount('#profile')
