<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const loginEmail = ref('')
const loginPassword = ref('')

const error = ref(null)
// const signupConfirmPassword = ref('')

const handleSubmitLogin = async () => {
  try {
    await store.dispatch('login', { email: loginEmail.value, password: loginPassword.value })
    router.push('/home')
    console.log(store.state.user.email)
  } catch (err) {
    error.value = err.message
    setTimeout(() => {
      error.value = null
    }, 2000)
  }

  loginEmail.value = ''
  loginPassword.value = ''
}
</script>

<template>
  <!--LOG IN-->
  <div class="container align-content-center p-5 h-100">
    <div class="row bg-body-secondary p-5 d-flex justify-content-center">
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
          <div v-if="error">{{ error }}</div>
          <div class="mt-3 text-center">
            <a href="#">Forgot password?</a>
          </div>
          <div class="mt-3 text-center">
            <router-link to="/signup">Sign Up</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<style>
</style>