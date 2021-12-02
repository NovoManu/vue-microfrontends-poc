<template>
  <router-view :on-login="onLogin" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    onLogin: {
      type: Function,
      required: true,
      default: () => ({}),
    }
  }
})
</script>
