// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI2yqwQfFoEcO_K3GPXENEkxkCHQItcoQ",
  authDomain: "react-firebase-c64af.firebaseapp.com",
  projectId: "react-firebase-c64af",
  storageBucket: "react-firebase-c64af.firebasestorage.app",
  messagingSenderId: "213941787343",
  appId: "1:213941787343:web:548f2c359fc2681e78b5ba",
  measurementId: "G-Q4BGWE2HJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
