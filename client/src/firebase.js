// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-pulse-803ac.firebaseapp.com",
  projectId: "property-pulse-803ac",
  storageBucket: "property-pulse-803ac.appspot.com",
  messagingSenderId: "984719215417",
  appId: "1:984719215417:web:1b0b3ea4772fe3dfd8f6e8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
