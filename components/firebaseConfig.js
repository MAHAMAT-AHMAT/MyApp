// components/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmFrl4ZsRksQAEHkHFXkAYLqfT1njLpG4",
  authDomain: "myapp-963ad.firebaseapp.com",
  databaseURL: "https://myapp-963ad-default-rtdb.firebaseio.com",
  projectId: "myapp-963ad",
  storageBucket: "myapp-963ad.appspot.com",
  messagingSenderId: "113703756834",
  appId: "1:113703756834:web:15ce763a1e1d074145d67b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.database();
