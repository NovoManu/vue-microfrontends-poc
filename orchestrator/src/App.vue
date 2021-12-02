<template>
  <div>
    <AppLayout @logout="logout">
      <router-view @onLogout="onLogout = $event" />
    </AppLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from './layouts/AppLayout.vue'
import { deleteToken } from './services/localStorageManager'

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
  methods: {
    async logout() {
      await this.onLogout()
      deleteToken()
      void await this.$router.push('login')
    }
  }
})
</script>
