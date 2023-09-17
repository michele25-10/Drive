import React from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYm787AXpoKXOdG-CrvPvr9jyqGLdrU6g",
  authDomain: "drive-94f88.firebaseapp.com",
  projectId: "drive-94f88",
  storageBucket: "drive-94f88.appspot.com",
  messagingSenderId: "357649746576",
  appId: "1:357649746576:web:730432b19cdcf2389a6615",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
