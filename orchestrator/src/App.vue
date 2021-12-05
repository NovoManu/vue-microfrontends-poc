<template>
  <div>
    <AppLayout @logout="logout">
      <router-view :on-login="onLogin"/>
    </AppLayout>
  </div>
</template>

<script lang="ts">
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
  async created() {
    const { onLogout } = (await auth.bootstrap())(null, {})
    this.onLogout = onLogout
    // Note: get init data
    if (getToken()) {
      await this.onLogin()
    }
  },
  methods: {
    onLogin(key = null) {
      if (key) setToken(key)
      this.me = getMe()
        .then(() => {
          this.$router.push('/')
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
