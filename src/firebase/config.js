// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkSi-YUkgqb0iyqOScdyLswErpwc2ZB0o",
    authDomain: "marveg1.firebaseapp.com",
    projectId: "marveg1",
    storageBucket: "marveg1.appspot.com",
    messagingSenderId: "30671097089",
    appId: "1:30671097089:web:48bad6e5aa886a7e819f00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)