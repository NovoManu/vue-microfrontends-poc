<template>
  <div>{{ sharedData.me }}</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfileApp',
  props: {
    sharedData: {
      type: Object,
      default: () => ({})
    }
  },
})
</script>

<style lang='scss' scoped>

</style>
