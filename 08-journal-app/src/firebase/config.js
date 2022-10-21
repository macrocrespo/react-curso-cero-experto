// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDutQce_hWs_RBlasZuCY8c6adjuQ-wgqo",
  authDomain: "react-mac.firebaseapp.com",
  projectId: "react-mac",
  storageBucket: "react-mac.appspot.com",
  messagingSenderId: "397440041813",
  appId: "1:397440041813:web:8f6f6f57886dabb9f765dc"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// Funcionalidades de autenticación
export const FirebaseAuth = getAuth( FirebaseApp );
// Funcionalidades de la Base de datos
export const FireBaseDB = getFirestore( FirebaseApp );