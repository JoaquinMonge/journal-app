// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrNep6eIG_NINYvNZT3F0SDIxs3spSGrE",
  authDomain: "react-journal-26708.firebaseapp.com",
  projectId: "react-journal-26708",
  storageBucket: "react-journal-26708.appspot.com",
  messagingSenderId: "394995956609",
  appId: "1:394995956609:web:b09f1140c451c5c3980680",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
