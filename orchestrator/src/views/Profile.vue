<template>
  <div :id="id"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mount } from 'profile/ProfileApp'

export default defineComponent({
  name: 'Profile',
  data() {
    return {
      id: 'profile'
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
