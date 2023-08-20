// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk9ijEASnwHcWPW5roI12MmUOwKHRd3N8",
  authDomain: "flipkart-grid-3f43c.firebaseapp.com",
  databaseURL: "https://flipkart-grid-3f43c-default-rtdb.firebaseio.com",
  projectId: "flipkart-grid-3f43c",
  storageBucket: "flipkart-grid-3f43c.appspot.com",
  messagingSenderId: "692896971621",
  appId: "1:692896971621:web:5b81bc0fa7d9ff5a61ff8c",
  measurementId: "G-QNTX3CDGP0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export default firestore;
/*
import firebase from 'firebase';
 
const firebaseConfig = {
    // Your Credentials
};
   
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
 
export default database;*/ 