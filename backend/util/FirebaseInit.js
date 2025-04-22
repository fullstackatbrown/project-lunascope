// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk55hMT6F3rbc9UMhMqpzLY512BrF7pPo",
  authDomain: "lunascope-25220.firebaseapp.com",
  projectId: "lunascope-25220",
  storageBucket: "lunascope-25220.firebasestorage.app",
  messagingSenderId: "180479847635",
  appId: "1:180479847635:web:295c61cef772fc41c2f826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app);
