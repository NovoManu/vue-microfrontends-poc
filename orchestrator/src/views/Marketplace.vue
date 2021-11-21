<template>
  <div :id="id"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mount } from 'marketplace/MarketplaceApp'

export default defineComponent({
  name: 'Marketplace',
  data() {
    return {
      id: 'marketplace'
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
