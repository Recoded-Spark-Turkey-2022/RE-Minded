// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {FacebookAuthProvider,GoogleAuthProvider,getAuth} from 'firebase/auth';

require ('dotenv').config();




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: process.env.API_KEY,
  authDomain: "re-minded.firebaseapp.com",
  projectId: "re-minded",
  storageBucket: "re-minded.appspot.com",
  messagingSenderId: "633791612145",
  appId: "1:633791612145:web:19ea39d978909ac76a9550" 
    
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app); 
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

