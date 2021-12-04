<template>
  <div :id="id" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { auth } from '../modules'
import { setToken } from '../services/localStorageManager'

export default defineComponent({
  name: 'Auth',
  data() {
    return {
      id: 'auth',
    }
  },
  async mounted() {
    const onLogin = (key) => {
      if (key) setToken(key)
      this.$router.push('/')
    }
    const syncParentRouter = (route) => {
      this.$router.push(route)
    }
    try {
      const { syncChildRouter } = (await auth.bootstrap())(`#${this.id}`, { onLogin, syncParentRouter })
      this.$watch(
          '$route',
          (to) => {
            syncChildRouter(to.path)
          },
          {
            immediate: true
          }
      )
    } catch (e) {
      console.log(e)
    }
  },
})
</script>
