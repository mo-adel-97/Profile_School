// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7NdkaMgYhmCQLFI1TmedHandTcv8jLSc",
  authDomain: "school-e166c.firebaseapp.com",
  databaseURL: "https://school-e166c-default-rtdb.firebaseio.com",
  projectId: "school-e166c",
  storageBucket: "school-e166c.appspot.com",
  messagingSenderId: "466357379623",
  appId: "1:466357379623:web:b92bc4a8b13cd7e6f6a402",
  measurementId: "G-2JV009H5PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);