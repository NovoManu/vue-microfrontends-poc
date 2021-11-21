<template>
  <div :id="id"></div>
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
    try {
      mount(`#${this.id}`)
    } catch (e) {
      console.log(e)
    }
  }
})
</script>

<style lang='scss' scoped>

</style>
