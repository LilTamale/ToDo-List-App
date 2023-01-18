// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGoCRssCG65JVo9vV2X1pxiV-mg3kKe5o",
  authDomain: "todo-app-a2c7b.firebaseapp.com",
  projectId: "todo-app-a2c7b",
  storageBucket: "todo-app-a2c7b.appspot.com",
  messagingSenderId: "823003518280",
  appId: "1:823003518280:web:a8b6b6704bacaebe5e8f7d",
  measurementId: "G-VC7JF8RNX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)