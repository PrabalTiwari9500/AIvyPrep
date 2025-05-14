// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDYVYikK4GysCZKBmlyLCzJD6Z867X46TA",
    authDomain: "aivyprep.firebaseapp.com",
    projectId: "aivyprep",
    storageBucket: "aivyprep.firebasestorage.app",
    messagingSenderId: "95999596449",
    appId: "1:95999596449:web:2255e4c7ede51a9b005de0",
    measurementId: "G-9SHM3GNTS7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);