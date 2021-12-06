<template>
  <h1>Marketplace</h1>
  <table class="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>State</th>
      <th>Vehicle Type</th>
      <th>Created</th>
      <th>Delivery Start</th>
      <th>Delivery End</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="order in orders" :key="order.id">
      <th>{{ order.id }}</th>
      <th>{{ order.state }}</th>
      <th>{{ order.vehicleType }}</th>
      <th>{{ order.created }}</th>
      <th>{{ order.deliveryStart }}</th>
      <th>{{ order.deliveryEnd }}</th>
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
      this.orders = res.marketplace_orders.slice(0, 20).map(({ order }) => ({
        state: order.state,
        vehicleType: order.vehicle_type,
        id: order.id,
        created: order.created,
        deliveryStart: order.delivery_start,
        deliveryEnd: order.delivery_end
      }))
    }).catch(e => {
      console.log(e)
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
