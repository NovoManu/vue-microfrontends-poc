<template>
  <div :id="id" />
  <div v-if="isLoaded === false">Marketplace is not available at the moment. Try later.</div>
</template>

<script>
import { defineComponent } from 'vue'
import { marketplace, profile } from '../modules'

export default defineComponent({
  name: 'Marketplace',
    props: {
    sharedData: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      id: 'marketplace',
      isLoaded: null
    }
  },
  emits: ['logout', 'onLogout', 'onLogin', 'sharedData'],
  mounted() {
    this.$watch(
      'sharedData',
      (data) => {
        if (data.me) this.mountApp(data)
      },
      {
        deep: true,
        immediate: true,
      }
    )
  },
  methods: {
    async mountApp(sharedData) {
      this.isLoaded = null
      try {
        (await marketplace.bootstrap())(`#${this.id}`, { sharedData })
        this.isLoaded = true
      } catch (e) {
        console.log(e)
        this.isLoaded = false
      }
      // try {
      //   (await profile.bootstrap())(`#${this.id}`, { sharedData })
      //   this.isLoaded = true
      // } catch (e) {
      //   console.log(e)
      //   this.isLoaded = false
      // }
    }
  }
})
</script>
