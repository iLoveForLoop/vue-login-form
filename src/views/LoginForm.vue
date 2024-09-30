<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const loginEmail = ref('')
const loginPassword = ref('')

const signupEmail = ref('')
const signupPassword = ref('')

const error = ref(null)
// const signupConfirmPassword = ref('')

const handleSubmitLogin = async () => {
  try {
    await store.dispatch('login', { email: loginEmail.value, password: loginPassword.value })
    router.push('/home')
  } catch (err) {
    error.value = err.message
  }

  loginEmail.value = ''
  loginPassword.value = ''
}

const handleSubmitSignup = async () => {
  try {
    await store.dispatch('signUp', { email: signupEmail.value, password: signupPassword.value })
    router.push('/home')
  } catch (err) {
    error.value = err.message
  }

  signupEmail.value = ''
  signupPassword.value = ''
}
</script>

<template>
  <!--LOG IN-->
  <div class="container align-content-center p-5" style="height: 100vh">
    <div class="row bg-body-secondary p-5">
      <div class="col-6 p-5 bg-dark text-light">
        <h1 class="text-center">LOG IN</h1>
        <form @submit.prevent="handleSubmitLogin">
          <div class="mb-3">
            <label for="l-email" class="form-label text-start">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
              id="l-email"
              v-model="loginEmail"
              required
            />
          </div>
          <div class="mb-3">
            <label for="l-password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter your password"
              id="l-password"
              v-model="loginPassword"
              required
            />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <div class="mt-3 text-center">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>

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
          <!-- <div class="mb-3">
            <label for="cs-password" class="form-label">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="cs-password"
              placeholder="Enter your password"
              v-model="signupConfirmPassword"
              required
            />
          </div> -->
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