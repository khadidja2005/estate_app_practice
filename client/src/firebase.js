// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-26a9d.firebaseapp.com",
  projectId: "mern-estate-26a9d",
  storageBucket: "mern-estate-26a9d.appspot.com",
  messagingSenderId: "172491061794",
  appId: "1:172491061794:web:e60b907b67db9a7787287b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);