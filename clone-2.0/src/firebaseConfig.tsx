import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm8VOB-JJfmoSENvqUAB-w5QEcF4r2XSE",
  authDomain: "clonedrive-c135c.firebaseapp.com",
  projectId: "clonedrive-c135c",
  storageBucket: "clonedrive-c135c.appspot.com",
  messagingSenderId: "56724259518",
  appId: "1:56724259518:web:f38b42b147deada40014ef",
  measurementId: "G-QVS6SDS885",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
