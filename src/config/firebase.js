// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithCredential, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1ozfmdYv_i_z1sgXiHDknQUqRA-91CUA",
    authDomain: "easy-fe8d5.firebaseapp.com",
    projectId: "easy-fe8d5",
    storageBucket: "easy-fe8d5.appspot.com",
    messagingSenderId: "432866575051",
    appId: "1:432866575051:web:0bd0e7d370098f1957514e",
    measurementId: "G-X9WWS9HCKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}