import { createStore } from 'vuex'
import { auth } from '@/firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('Changed to', state.user)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
    async signUp(context, { email, password }) {
      console.log('sign up running')

      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Error Signing Up')
      }
    },
    async login(context, { email, password }) {
      console.log('login is running')

      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Error Loging In')
      }
    },
    async logout(context) {
      console.log('logging out')
      await signOut(auth)
      context.commit('setUser', null)
    }
  }
})

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})

export default store
