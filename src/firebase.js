import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAUMfhqhrEiw15JwazzV69vAgbOnD3bKz0",
    authDomain: "poke-memory-63b05.firebaseapp.com",
    databaseURL: "https://poke-memory-63b05.firebaseio.com",
    projectId: "poke-memory-63b05",
    storageBucket: "poke-memory-63b05.appspot.com",
    messagingSenderId: "223696105825",
    appId: "1:223696105825:web:4b38eac3286efa1e095520",
    measurementId: "G-TTQQ3VVK4C"
};
//initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};