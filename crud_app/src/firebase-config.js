// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAArcdcYHLma0pV3gs6TkPtKEuRSjpY5bA",
  authDomain: "fir-crud-7f6d1.firebaseapp.com",
  projectId: "fir-crud-7f6d1",
  storageBucket: "fir-crud-7f6d1.firebasestorage.app",
  messagingSenderId: "492447466307",
  appId: "1:492447466307:web:e5d5e101da7210c81065f6",
  measurementId: "G-NL96FN105H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
