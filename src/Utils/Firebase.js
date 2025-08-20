// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtvHW11CHWP-uPZrXO7WGBgq_-8NrJ6oc",
  authDomain: "broadtube-8e97a.firebaseapp.com",
  projectId: "broadtube-8e97a",
  storageBucket: "broadtube-8e97a.firebasestorage.app",
  messagingSenderId: "794027625340",
  appId: "1:794027625340:web:b4e89ac6de2bcb930672f9",
  measurementId: "G-HSBH7W0BCW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
