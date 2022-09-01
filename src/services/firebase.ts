// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZC_FwEswDC5tjmlY1zHqIXGxBx7-_bGg',
  authDomain: 'notes-87864.firebaseapp.com',
  projectId: 'notes-87864',
  storageBucket: 'notes-87864.appspot.com',
  messagingSenderId: '286826658102',
  appId: '1:286826658102:web:1876e9e4f88fa9ac8b5b97',
  databaseURL: 'https://notes-87864-default-rtdb.firebaseio.com',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)

export {app, auth, db}
