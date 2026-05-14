// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-9q9fFjLiKXZT5KU23L7hIsHn1ejXcAk",
  authDomain: "tb-tweet-annotator.firebaseapp.com",
  projectId: "tb-tweet-annotator",
  storageBucket: "tb-tweet-annotator.firebasestorage.app",
  messagingSenderId: "646743575811",
  appId: "1:646743575811:web:e6ecf1fd4038e98cd2ed36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();