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
  apiKey: 'AIzaSyAI7YwvRhhF8t7BFEHSG9bOtm7a9F3ifLc',
  authDomain: 're-minded-fac50.firebaseapp.com',
  projectId: 're-minded-fac50',
  storageBucket: 're-minded-fac50.appspot.com',
  messagingSenderId: '241987380600',
  appId: '1:241987380600:web:f37e04f7ce7a8482e5548d',
  measurementId: 'G-XEH56M2D5Y',
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
