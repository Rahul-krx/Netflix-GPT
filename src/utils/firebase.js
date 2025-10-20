// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"

import dotenv from "dotenv";
dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import .meta.env.AUTH_DOMAIN,
  projectId: "netflix-gpt-96k",
  storageBucket: "netflix-gpt-96k.firebasestorage.app",
  messagingSenderId: "658024209775",
  appId: "1:658024209775:web:c00fd3b3bdc95fb54f5c9a",
  measurementId: "G-ZHXCLGS71D"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);