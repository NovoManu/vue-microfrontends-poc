<template>
  <div :id="id" />
  <div v-if="isLoaded === false">Marketplace is not available at the moment. Try later.</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { marketplace } from '../modules'

export default defineComponent({
  name: 'Marketplace',
  data() {
    return {
      id: 'marketplace',
      isLoaded: null
    }
  },
  emits: ['logout', 'onLogout'],
  async mounted() {
    try {
      (await marketplace.bootstrap())(`#${this.id}`)
      this.isLoaded = true
    } catch (e) {
      console.log(e)
      this.isLoaded = false
    }
  }
})
</script>
