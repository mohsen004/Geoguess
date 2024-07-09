// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBV_ApcFF5dNikoge0weQ_WqEzGVD1w5NQ",
    authDomain: "assignment-2-e89df.firebaseapp.com",
    databaseURL: "https://assignment-2-e89df-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "assignment-2-e89df",
    storageBucket: "assignment-2-e89df.appspot.com",
    messagingSenderId: "417507281889",
    appId: "1:417507281889:web:6c1d0f67d321b9a4d2e0a0",
    measurementId: "G-4491BZD8GF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
