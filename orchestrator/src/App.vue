<template>
  <div>
    Orchestrator
    <br>
    <router-link to="/login">Login</router-link>
    <br>
    <router-link to="/marketplace">Marketplace</router-link>
    <br>
    <router-link to="/profile">Profile</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getLoadedApp } from './bootstrap'

export default defineComponent({
  name: 'App',
  computed: {
    apps() {
      return getLoadedApp('profile')
    }
  }
})
</script>

<style lang='scss' scoped>

</style>
