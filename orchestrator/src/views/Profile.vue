<template>
  <div :id="id" />
  <div v-if="isLoaded === false">Profile is not available at the moment. Try later.</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { profile } from '../modules'

export default defineComponent({
  name: 'Profile',
  data() {
    return {
      id: 'profile',
      isLoaded: null
    }
  },
  emits: ['logout', 'onLogout'],
  async mounted() {
    try {
      (await profile.bootstrap())(`#${this.id}`)
      this.isLoaded = true
    } catch (e) {
      console.log(e)
      this.isLoaded = false
    }
  }
})
</script>
