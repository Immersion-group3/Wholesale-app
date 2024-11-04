// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8LzqTUFcRfP7dUAIg69AIDgvPcnZrgcA",
  authDomain: "wpdscs-vendor-auth.firebaseapp.com",
  projectId: "wpdscs-vendor-auth",
  storageBucket: "wpdscs-vendor-auth.firebasestorage.app",
  messagingSenderId: "598936580918",
  appId: "1:598936580918:web:0a3514c3405437e58f3997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;