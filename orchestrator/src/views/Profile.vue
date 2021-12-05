<template>
  <div :id="id" />
  <div v-if="isLoaded === false">Profile is not available at the moment. Try later.</div>
</template>

<script>
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
  props: {
    sharedData: {
      type: Object,
      required: true,
    }
  },
  emits: ['logout', 'onLogout'],
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
        (await profile.bootstrap())(`#${this.id}`, { sharedData })
        this.isLoaded = true
      } catch (e) {
        console.log(e)
        this.isLoaded = false
      }
    }
  }
})
</script>
