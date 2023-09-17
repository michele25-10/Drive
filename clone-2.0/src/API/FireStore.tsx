import React from "react";
import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Dove vogliamo aggiungere il nome della raccolta e i riferimenti al database
let files = collection(database, "files");

export const addFiles = (imageLink: string) => {
  try {
    //Dove effettivamente viene fatta la post dei nostri dati insieme al nome della raccolta e ai riferimenti al database
    addDoc(files, {
      imageLink: imageLink,
    });
  } catch (err) {
    console.log(err);
  }
};