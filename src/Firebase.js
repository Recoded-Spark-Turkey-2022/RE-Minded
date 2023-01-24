// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  sendSignInLinkToEmail,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRRQfyq926m7lyzLmizQTEAESABecwd7U',
  authDomain: 're-minded.firebaseapp.com',
  projectId: 're-minded',
  storageBucket: 're-minded.appspot.com',
  messagingSenderId: '633791612145',
  appId: '1:633791612145:web:19ea39d978909ac76a9550',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const fireStore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const signInWithPopups = signInWithPopup();


export const signInWithGoogle = async (cb) => {


  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { user } = result; // Destructure the user from the result
    localStorage.setItem('userName', user.displayName);
    localStorage.setItem('userEmail', user.email);
    cb();
    return user;
  } catch (error) {
    return error;
  }
};

export const signInWithFacebook = async (cb) => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const { user } = result; // Destructure the user from the result
    localStorage.setItem('userName', user.displayName);
    localStorage.setItem('userEmail', user.email);
    cb();
    return user;
  } catch (error) {
    return error;
  }
};

export const signUpWithEmail = async (email) => {
  try {
    const result = sendSignInLinkToEmail(auth, email);
    const { user } = result;
    localStorage.setItem('emailForSignIn', user.email);
    return user;
  } catch (error) {
    return error;
  }
};


