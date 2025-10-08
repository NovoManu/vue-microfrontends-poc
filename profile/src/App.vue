<template>
  <h1>Profile</h1>
  <table class="table">
    <tbody>
    <tr>
      <th>{{ sharedData.me.first_name }} {{ sharedData.me.last_name }}</th>
      <th>{{ sharedData.me.email }}</th>
    </tr>
    </tbody>
  </table>
  <button @click="sendEvent">Send event</button>
  <div style="height: 300px; width: 300px; padding-left: 500px; outline: #363636" id="_marketplace"></div>
</template>

<script>
import { defineComponent } from 'vue'
import { mount } from 'marketplace/MarketplaceApp'

export default defineComponent({
  name: 'ProfileApp',
  props: {
    sharedData: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    mount('#_marketplace')
  },
  methods: {
    sendEvent() {
      this.sharedData.eventBus.emit('test-event', 'Hello from Profile')
    }
  }
})
</script>

<style lang='scss' scoped>
.table {
  width: 100%;
  border-spacing: 0;
  color: #363636;
}
.table th {
  border-bottom: thin solid rgba(0,0,0,.12);
  padding: 0.5rem 0.75rem;
  user-select: none;
  font-weight: 300;
  text-align: left;
}
.table tr:nth-child(2n) {
  background-color: rgba(0,0,0,.05);
}
.table thead th {
  font-weight: bold;
}
</style>
