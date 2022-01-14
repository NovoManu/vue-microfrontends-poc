<template>
  <div :id="id" />
</template>

<script>
import { defineComponent } from 'vue'
import { auth } from '../modules'

export default defineComponent({
  name: 'Auth',
  data() {
    return {
      // Todo: create hash to prevent identical ids
      id: 'auth',
    }
  },
  props: {
    onLogin: {
      type: Function,
      required: true,
      default: () => {}
    }
  },
  async mounted() {
    const syncParentRouter = (route) => {
      this.$router.push(route)
    }
    const { syncChildRouter } = (await auth.bootstrap())(`#${this.id}`, { onLogin: this.onLogin, syncParentRouter })
    this.$watch(
      '$route',
      (to) => {
        syncChildRouter(to.path)
      },
      {
        immediate: true
      }
    )
  },
})
</script>
