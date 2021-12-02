<template>
  <div class="main-page">
    <header class="header">
      <button class="button" @click="$emit('logout')">Logout</button>
    </header>
    <div class="sidebar">
      <router-link to="/marketplace" class="sidebar-item">M</router-link>
      <router-link to="profile" class="sidebar-item">P</router-link>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLayoutHome"
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.main-page {
  display: flex;
  min-height: calc(100vh - 16px);
  position: relative;
  background-color: #fff;
}
.header {
  width: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.sidebar {
  position: fixed;
  background-color: #fff;
  height: 100vh;
  width: 4rem;
  top: 0;
  left: 0;
  z-index: 17;
  border-right: 0.1rem solid #e3e9ef;
  overflow: hidden;
}
.sidebar-item {
  width: 100%;
  padding: 1rem;
  border-left: 4px solid transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #6e7780;
  cursor: pointer;
  transition: .3s ease-in-out;
  &:hover {
    background-color: #e3e9ef;
    color:  #ff8300;
    border-color:  #ff8300;
  }
}
.button {
  min-width: 12rem;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  border-radius: 4px;
  border: 1px solid #ff8300;
  background-color: #ff8300;
  font-size: 1.2rem;
  color: #fff;
  text-transform: none;
  cursor: pointer;
}
.content {
  width: 100%;
  padding: 1rem 0 0 4rem;
}
.router-link-active {
  background-color: #e3e9ef;
  color:  #ff8300;
  border-color:  #ff8300;
}
</style>
