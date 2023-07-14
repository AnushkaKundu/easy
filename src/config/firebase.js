import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyB1ozfmdYv_i_z1sgXiHDknQUqRA-91CUA",
    authDomain: "easy-fe8d5.firebaseapp.com",
    databaseURL: "https://easy-fe8d5-default-rtdb.firebaseio.com",
    projectId: "easy-fe8d5",
    storageBucket: "easy-fe8d5.appspot.com",
    messagingSenderId: "432866575051",
    appId: "1:432866575051:web:0bd0e7d370098f1957514e",
    measurementId: "G-X9WWS9HCKS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
const db = firebase.database();
export { firebase, db };
export default app