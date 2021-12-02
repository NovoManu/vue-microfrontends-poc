<template>
  <div :id="id" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mount } from 'auth/AuthApp'

export default defineComponent({
  name: 'Auth',
  data() {
    return {
      id: 'auth'
    }
  },
  mounted() {
    const onLogin = () => {
      console.log('login')
    }
    try {
      mount(`#${this.id}`, { onLogin })
    } catch (e) {
      console.log(e)
    }
  }
})
</script>

<style lang='scss' scoped>

</style>
