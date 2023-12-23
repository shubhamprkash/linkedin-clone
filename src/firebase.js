// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBH2cEZxqTvZj2BODe9Rp-pYGhbr81r6r4",
    authDomain: "linkedin-clone-fdfb7.firebaseapp.com",
    projectId: "linkedin-clone-fdfb7",
    storageBucket: "linkedin-clone-fdfb7.appspot.com",
    messagingSenderId: "982428713660",
    appId: "1:982428713660:web:cf8f638a93362e8df9c6b9"
};                


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

