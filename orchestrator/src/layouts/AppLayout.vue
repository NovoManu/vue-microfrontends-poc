<template>
  <component :is="layout" @logout="$emit('logout')">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault from './AppLayoutDefault'
import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'AppLayout',
  emits: ['logout', 'onLogout', 'onLogin', 'sharedData'],
  setup () {
    const layout = shallowRef(AppLayoutDefault)
    const route = useRoute()
    watch(
        () => route.meta,
        async meta => {
          try {
            const component = await import(`./${meta.layout}.vue`)
            layout.value = component?.default || AppLayoutDefault
          } catch (e) {
            console.log(e)
            layout.value = AppLayoutDefault
          }
        },
    )
    return { layout }
  }
}
</script>
