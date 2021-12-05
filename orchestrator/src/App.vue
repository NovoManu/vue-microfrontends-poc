<template>
  <div>
    <AppLayout @logout="logout">
      <router-view :on-login="onLogin" :shared-data="sharedData" />
    </AppLayout>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from './layouts/AppLayout.vue'
import { setToken, getToken, deleteToken } from './services/localStorageManager'
import { auth } from './modules'
import { getMe } from './services/api'

export default defineComponent({
  name: 'App',
  components: {
    AppLayout
  },
  data() {
    return {
      onLogout: () => {},
      me: null
    }
  },
  emits: ['logout', 'onLogout', 'onLogin', 'sharedData'],
  computed: {
    isLoggedIn() {
      return getToken()
    },
    sharedData() {
      return {
        me: this.me
      }
    }
  },
  async created() {
    const { onLogout } = (await auth.bootstrap())(null, {})
    this.onLogout = onLogout
    // Note: get init data
    if (this.isLoggedIn) {
      await this.onLogin()
    }
  },
  methods: {
    onLogin(key = null) {
      if (key) setToken(key)
      getMe()
        .then(me => {
          this.me = me
          // Note: should redirect to route before login
          if (key) this.$router.push('/')
        })
        .catch(e => {
          if (e.code === 401) {
            this.logout()
          }
        })
    },
    async logout() {
      await this.onLogout()
      deleteToken()
      void await this.$router.push('/login')
    }
  }
})
</script>
