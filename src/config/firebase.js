import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBSpfp6fhS9fNCpflO3J3CbkKp2m_kHdvw",
    authDomain: "linkedin-clone-1942d.firebaseapp.com",
    projectId: "linkedin-clone-1942d",
    storageBucket: "linkedin-clone-1942d.appspot.com",
    messagingSenderId: "840674448138",
    appId: "1:840674448138:web:3a224183a3c669fb66e0f3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };