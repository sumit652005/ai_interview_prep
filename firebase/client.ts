import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAlo5N2RddbDsb32ErMzsn_Curxh8KadtA",
  authDomain: "prepwise7-8.firebaseapp.com",
  projectId: "prepwise7-8",
  storageBucket: "prepwise7-8.firebasestorage.app",
  messagingSenderId: "183567664414",
  appId: "1:183567664414:web:76463dc66ebb840e9d350f",
  measurementId: "G-ZHDHN499C9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db= getFirestore(app);