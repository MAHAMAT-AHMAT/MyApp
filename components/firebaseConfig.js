import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmFrl4ZsRksQAEHkHFXkAYLqfT1njLpG4",
  authDomain: "myapp-963ad.firebaseapp.com",
  databaseURL: "https://myapp-963ad-default-rtdb.firebaseio.com",
  projectId: "myapp-963ad",
  storageBucket: "myapp-963ad.appspot.com",
  messagingSenderId: "113703756834",
  appId: "1:113703756834:web:15ce763a1e1d074145d67b",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getDatabase(app);

export { auth, db };
