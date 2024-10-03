<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const store = useStore()
const router = useRouter()
const error = ref(null)

const currentUser = store.state.user.email
const isThereUser = store.state.authIsReady

const logout = async () => {
  try {
    await store.dispatch('logout')
    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}
</script>

<template>
  <template v-if="isThereUser">
    <nav class="navbar bg-body-secondary text-dark m-auto d-flex justify-between px-5">
      <div class="d-flex">
        <div>
          <router-link class="navbar-brand" to="/home">Home</router-link>
        </div>
        <div>
          <router-link class="navbar-brand" to="/about">About</router-link>
        </div>
      </div>
      <div class="d-flex align-items-center gap-3">
        <div>{{ currentUser }}</div>
        <router-link to="/"
          ><button class="btn btn-info" @click="logout">Logout</button></router-link
        >
      </div>
    </nav>
  </template>
</template>



<style>
</style>