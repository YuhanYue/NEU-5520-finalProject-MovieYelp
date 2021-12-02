// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnEQW39GNNLSPiYx0ygTmo9bg5I-yeH50",
  authDomain: "movieyelp-8d10e.firebaseapp.com",
  projectId: "movieyelp-8d10e",
  storageBucket: "movieyelp-8d10e.appspot.com",
  messagingSenderId: "635478405441",
  appId: "1:635478405441:web:dc14565cb0be7b1eec31c0",
  measurementId: "G-7YK6MYD3ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};