import { createStore } from 'vuex'
import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('Changed to', state.user)
    }
  },
  actions: {
    async signUp(context, { email, password }) {
      console.log('sign up running')

      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Fetch failed')
      }
    },
    async login(context, { email, password }) {
      console.log('login is running')

      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Error loging in')
      }
    }
  }
})

export default store
