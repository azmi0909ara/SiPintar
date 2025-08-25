// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0j1m_a_EYk5KB5V5Fx9PjCOPc3WCduNw",
  authDomain: "elearning-b4399.firebaseapp.com",
  databaseURL: "https://elearning-b4399-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "elearning-b4399",
  storageBucket: "elearning-b4399.firebasestorage.app",
  messagingSenderId: "449400651585",
  appId: "1:449400651585:web:379fe19e40e5402ba5ebc0",
  measurementId: "G-Y7M0R143M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

let analytics = null;

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };