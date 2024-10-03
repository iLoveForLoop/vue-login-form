<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const store = useStore()
const router = useRouter()

const signupEmail = ref('')
const signupPassword = ref('')
const signupConfirmPassword = ref('')
const error = ref(null)

const showError = () => {}

const handleSubmitSignup = async () => {
  try {
    if (signupPassword.value === signupConfirmPassword.value) {
      await store.dispatch('signUp', { email: signupEmail.value, password: signupPassword.value })
      router.push('/home')
    } else {
      throw new Error("Password doesn't match")
    }
  } catch (err) {
    error.value = err.message
    setTimeout(() => {
      error.value = null
    }, 1000)
  }

  signupEmail.value = ''
  signupPassword.value = ''
  signupConfirmPassword.value = ''
}
</script>

<template>
  <div class="container align-content-center p-5 h-100">
    <div class="row bg-body-secondary p-5 d-flex justify-content-center">
      <!-- SIGN UP -->
      <div class="col-6 bg-dark text-light p-5">
        <h1 class="text-center">SIGN UP</h1>
        <form @submit.prevent="handleSubmitSignup">
          <div class="mb-3">
            <label for="s-email" class="form-label text-start">Email address</label>
            <input
              type="email"
              class="form-control"
              id="s-email"
              placeholder="Enter your email"
              v-model="signupEmail"
              required
            />
          </div>
          <div class="mb-3">
            <label for="s-password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="s-password"
              placeholder="Enter your password"
              v-model="signupPassword"
              required
            />
          </div>
          <div class="mb-3">
            <label for="cs-password" class="form-label">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="cs-password"
              placeholder="Enter your password"
              v-model="signupConfirmPassword"
              required
            />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <div v-if="error">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<style>
</style>