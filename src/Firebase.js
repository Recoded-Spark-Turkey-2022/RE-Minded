// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpt6i88789JQrTBMidbzngKMoycRQ5Ddo',
  authDomain: 'tryingagain-9dcd3.firebaseapp.com',
  projectId: 'tryingagain-9dcd3',
  storageBucket: 'tryingagain-9dcd3.appspot.com',
  messagingSenderId: '396924148778',
  appId: '1:396924148778:web:63441b3fee19508bf8f753',
  measurementId: 'G-D8H1FZJ9RZ',
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
