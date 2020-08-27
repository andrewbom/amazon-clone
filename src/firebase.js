import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAs_raROYV0oprzQ_mmM4Kszz6qgpdua_8",
  authDomain: "clone-1de83.firebaseapp.com",
  databaseURL: "https://clone-1de83.firebaseio.com",
  projectId: "clone-1de83",
  storageBucket: "clone-1de83.appspot.com",
  messagingSenderId: "258537641504",
  appId: "1:258537641504:web:89008879fd35624c844e45",
  measurementId: "G-WD1QN16R0Z",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
