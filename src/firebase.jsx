import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBlo6WswZ6npJ5JrDBIOs9rXiA8mtNJVL0",
    authDomain: "linkedin-clone-1ea82.firebaseapp.com",
    projectId: "linkedin-clone-1ea82",
    storageBucket: "linkedin-clone-1ea82.appspot.com",
    messagingSenderId: "174838083998",
    appId: "1:174838083998:web:a5e1841b3fe14567e8668f",
    measurementId: "G-CNMJYMXZE8"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export {auth,provider,storage}

export default db;

