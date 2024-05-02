// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "estatevista-b11ea.firebaseapp.com",
    projectId: "estatevista-b11ea",
    storageBucket: "estatevista-b11ea.appspot.com",
    messagingSenderId: "108452601900",
    appId: "1:108452601900:web:9398919921895adcb73189"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);