<template>
  <h1>Profile</h1>
  <table class="table">
    <tbody>
    <tr>
      <th>{{ sharedData.me.first_name }} {{ sharedData.me.last_name }}</th>
      <th>ustenko.mi@gmail.com</th>
    </tr>
    </tbody>
  </table>
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
