// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHxjOfLX-UK-6bZP5RKLgSakXmffpiY1g",
  authDomain: "restaurante-20318.firebaseapp.com",
  projectId: "restaurante-20318",
  storageBucket: "restaurante-20318.appspot.com",
  messagingSenderId: "178272692345",
  appId: "1:178272692345:web:2e574a0da57e917e8c4ca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);