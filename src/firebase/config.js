import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB4GnOrKLhZUAIcMSsxWqWksIGmKH0j3Os',
  authDomain: 'test-project-7b9fe.firebaseapp.com',
  projectId: 'test-project-7b9fe',
  storageBucket: 'test-project-7b9fe.appspot.com',
  messagingSenderId: '607993117028',
  appId: '1:607993117028:web:367a40b41e05d9df492271'
}

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
