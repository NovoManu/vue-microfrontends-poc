<template>
  <div>
    <AppLayout @logout="logout">
      <router-view />
    </AppLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from './layouts/AppLayout.vue'
import { deleteToken } from './services/localStorageManager'
import { auth } from './modules'

export default defineComponent({
  name: 'App',
  components: {
    AppLayout
  },
  data() {
    return {
      onLogout: () => {}
    }
  },
  async mounted() {
    const { onLogout } = (await auth.bootstrap())(`#${this.id}`, {})
    this.onLogout = onLogout
  },
  methods: {
    async logout() {
      await this.onLogout()
      deleteToken()
      void await this.$router.push('login')
    }
  }
})
</script>
