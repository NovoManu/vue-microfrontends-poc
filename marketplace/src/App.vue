<template>
  <h1>Marketplace</h1>
  <table class="table">
    <thead>
    <tr>
      <th>Loading</th>
      <th>Unloading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th>load</th>
      <th>unloading</th>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent } from 'vue'
import { getOrders } from '../services/api'

export default defineComponent({
  name: 'MarketplaceApp',
  data() {
    return {
      orders: [],
    }
  },
  mounted() {
    getOrders().then(res => {
      console.log(res)
    })
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
