<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppLayoutDefault',
  emits: ['logout', 'onLogout', 'onLogin', 'sharedData'],
})
</script>
