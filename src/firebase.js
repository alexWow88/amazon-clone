// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARCJVhJjI5e_K1YfkDzUb6A7UUguDWsaM",
  authDomain: "challenge-aed03.firebaseapp.com",
  projectId: "challenge-aed03",
  storageBucket: "challenge-aed03.appspot.com",
  messagingSenderId: "338821285034",
  appId: "1:338821285034:web:57d2cd15dca3c367fa3cd3",
  measurementId: "G-ERS8ZT16GQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
