<template>
  <div class="login-page">
    <div class="split left-side image-container" :style="test">
      <img
          alt="login-background"
          src="../assets/img/login-background-image.png"
          class="login-background"
      >
      <img
          alt="login-image"
          src="../assets/img/login-logo.svg"
          class="login-logo"
      >
    </div>
    <div class="split right-side form-container">
      <div class="login-form">
        <div class="input-field">
          <label class="input-label">Email</label>
          <input v-model="email" class="input" type="email" placeholder="Enter email address"/>
        </div>
        <div class="input-field">
          <label class="input-label">Password</label>
          <input v-model="password" class="input" type="password" placeholder="Enter password"/>
        </div>
        <div class="login-button">
          <button type="submit" class="button" @click="onSubmit">Log me in</button>
        </div>
        <span>Don't have an account? <router-link to="signup">Signup</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { login } from '../../services/api'

export default defineComponent({
  name: 'Login',
  props: {
    onLogin: {
      type: Function,
      required: true,
      default: () => ({}),
    }
  },
  data() {
    return {
      email: null,
      password: null,
      image: require('../assets/img/login-background-image.png'),
      test: {
        backgroundImage: `url(${require('../assets/img/login-background-image.png')})`,
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        const key = await login({
          email: this.email,
          password: this.password,
        })
        this.onLogin(key)
      } catch {
        console.log('login failed')
      }
    }
  }
})
</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
.login-page {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #f7fbff;
  overflow-y: auto;
  font-family: 'Roboto', sans-serif;
}
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
}
.left-side {
  left: 0;
}
.login-background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.login-logo {
  padding: 2rem;
  position: relative;
  z-index: 2;
}
.right-side {
  right: 0;
  background-color: white;
}
.form-container {
  display: flex;
}
.login-form {
  width: 100%;
  padding: 3rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input-field {
  width: 100%;
  margin: 0.75rem 0;
}
.input-label {
  display: inline-block;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  color: #6e7780;
}
.input {
  width: 100%;
  height: 40px;
  color: #363b40;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #e3e9ef;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
}
.login-button {
  display: flex;
  justify-content: center;
  padding: 1rem;
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
</style>
