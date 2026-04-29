// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wedding-invite-61fc2.firebaseapp.com",
  projectId: "wedding-invite-61fc2",
  storageBucket: "wedding-invite-61fc2.firebasestorage.app",
  messagingSenderId: "925991228472",
  appId: "1:925991228472:web:f09ed672dd2d806f6a42cd",
  measurementId: "G-KRXCS5MH23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
