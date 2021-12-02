<template>
  <div :id="id" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mount } from 'auth/AuthApp'
import { setToken } from '../services/localStorageManager'

export default defineComponent({
  name: 'Auth',
  data() {
    return {
      id: 'auth'
    }
  },
  mounted() {
    const onLogin = (key) => {
      if (key) setToken(key)
      this.$router.push('/')
    }
    const syncParentRouter = (route) => {
      this.$router.push(route)
    }
    try {
      const { syncChildRouter, onLogout } = mount(`#${this.id}`, { onLogin, syncParentRouter })
      this.$watch(
          '$route',
          (to) => {
            syncChildRouter(to.path)
          },
          {
            immediate: true
          }
      )
      this.$emit('onLogout', onLogout)
    } catch (e) {
      console.log(e)
    }
  },
})
</script>

<style lang='scss' scoped>

</style>
