// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl5ny4AtbZuIGFPIwVD6PH5VLVmUbUgDU",
    authDomain: "the-artsy-lens-7e114.firebaseapp.com",
    projectId: "the-artsy-lens-7e114",
    storageBucket: "the-artsy-lens-7e114.appspot.com",
    messagingSenderId: "155037949773",
    appId: "1:155037949773:web:1b561959d2694e267da104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;