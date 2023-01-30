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
  apiKey: 'AIzaSyAV0K8b1vMnNWM4iIQjDKP6Vf23cDY_1Ls',
  authDomain: 'trying1million.firebaseapp.com',
  projectId: 'trying1million',
  storageBucket: 'trying1million.appspot.com',
  messagingSenderId: '641900822909',
  appId: '1:641900822909:web:79b2654d9180c21c95cc14',
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
