<template>
  <div class="login-page">
    <div class="split left-side image-container" :style="test">
      <img
        alt="login-background"
        src="../assets/img/login-background-image.png"
        class="login-background"
      />
      <img
        alt="login-image"
        src="../assets/img/login-logo.svg"
        class="login-logo"
      />
    </div>
    <div class="split right-side form-container">
      <div class="login-form">
        <div class="input-field">
          <label class="input-label">Email</label>
          <input
            v-model="formData.email"
            class="input"
            type="email"
            placeholder="Enter email address"
            :class="{ error: errors.email }"
          />
          <div v-if="errors.email" class="error-message">
            {{ errors.email }}
          </div>
        </div>
        <div class="input-field">
          <label class="input-label">Password</label>
          <input
            v-model="formData.password"
            class="input"
            type="password"
            placeholder="Enter password"
            :class="{ error: errors.password }"
          />
          <div v-if="errors.password" class="error-message">
            {{ errors.password }}
          </div>
        </div>
        <div class="input-field">
          <label class="input-label">Confirm Password</label>
          <input
            v-model="formData.confirmPassword"
            class="input"
            type="password"
            placeholder="Confirm password"
            :class="{ error: errors.confirmPassword }"
          />
          <div v-if="errors.confirmPassword" class="error-message">
            {{ errors.confirmPassword }}
          </div>
        </div>
        <div v-if="errorMessage" class="error-message general-error">
          {{ errorMessage }}
        </div>
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>
        <div class="login-button">
          <button
            type="submit"
            class="button"
            @click="handleSignup"
            :disabled="isLoading"
          >
            {{ isLoading ? "Signing up..." : "Signup" }}
          </button>
        </div>
        <span
          >Already have an account?
          <router-link to="login">Login</router-link></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { register } from "../../services/api";

export default defineComponent({
  name: "Signup",
  setup() {
    const formData = reactive({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const errors = reactive({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const errorMessage = ref("");
    const successMessage = ref("");
    const isLoading = ref(false);

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validateForm = () => {
      // Clear previous errors
      errors.email = "";
      errors.password = "";
      errors.confirmPassword = "";
      errorMessage.value = "";

      let isValid = true;

      // Validate email
      if (!formData.email) {
        errors.email = "Email is required";
        isValid = false;
      } else if (!validateEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
        isValid = false;
      }

      // Validate password
      if (!formData.password) {
        errors.password = "Password is required";
        isValid = false;
      } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
        isValid = false;
      }

      // Validate confirm password
      if (!formData.confirmPassword) {
        errors.confirmPassword = "Please confirm your password";
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
        isValid = false;
      }

      return isValid;
    };

    const handleSignup = async () => {
      if (!validateForm()) {
        return;
      }

      isLoading.value = true;
      errorMessage.value = "";
      successMessage.value = "";

      try {
        const token = await register({
          email: formData.email,
          password: formData.password,
        });

        successMessage.value = "Registration successful! You can now login.";

        // Clear form
        formData.email = "";
        formData.password = "";
        formData.confirmPassword = "";

        // Optionally redirect to login after a delay
        setTimeout(() => {
          // You can add router navigation here if needed
          console.log("Registration successful, token:", token);
        }, 2000);
      } catch (error) {
        errorMessage.value =
          error.message || "Registration failed. Please try again.";
      } finally {
        isLoading.value = false;
      }
    };

    return {
      formData,
      errors,
      errorMessage,
      successMessage,
      isLoading,
      handleSignup,
    };
  },
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.login-page {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #f7fbff;
  overflow-y: auto;
  font-family: "Roboto", sans-serif;
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

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
}

.general-error {
  text-align: center;
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: #fdf2f2;
  border: 1px solid #fecaca;
  border-radius: 4px;
}

.success-message {
  color: #10b981;
  font-size: 0.875rem;
  text-align: center;
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 4px;
}
</style>
