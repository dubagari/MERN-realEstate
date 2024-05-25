// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-realestate-ffaab.firebaseapp.com",
  projectId: "mern-realestate-ffaab",
  storageBucket: "mern-realestate-ffaab.appspot.com",
  messagingSenderId: "1072492166230",
  appId: "1:1072492166230:web:60f6f36c3ca75b68cc4ff7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
