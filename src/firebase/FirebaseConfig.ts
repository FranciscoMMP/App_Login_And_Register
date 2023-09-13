// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmtdYEZmZERL6pfJg_Mz8c_HhFd3r-yV0",
  authDomain: "compass-sales-c9fe4.firebaseapp.com",
  projectId: "compass-sales-c9fe4",
  storageBucket: "compass-sales-c9fe4.appspot.com",
  messagingSenderId: "573237289678",
  appId: "1:573237289678:web:119347e69eab150575a69f"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const UPDATEUSER = updateProfile