// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0ppLzHC2wGLD2VM96Hqj8khJoaFmjfxQ",
    authDomain: "tool-516a1.firebaseapp.com",
    projectId: "tool-516a1",
    storageBucket: "tool-516a1.appspot.com",
    messagingSenderId: "845030358607",
    appId: "1:845030358607:web:4b2ad3032e77b41b40b43a",
    measurementId: "G-EEHTP1CDSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;