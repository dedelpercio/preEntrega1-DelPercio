// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeRY9WaWsHbOlf7A30Ez46s6EOkB_288U",
  authDomain: "deregalos-54c63.firebaseapp.com",
  projectId: "deregalos-54c63",
  storageBucket: "deregalos-54c63.appspot.com",
  messagingSenderId: "162357447609",
  appId: "1:162357447609:web:b14f92ddbc7d1d42bc4468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;