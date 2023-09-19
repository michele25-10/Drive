import React from "react";
import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Dove vogliamo aggiungere il nome della raccolta e i riferimenti al database
let files = collection(database, "files");

export const addFiles = (
  imageLink: string,
  imageName: string,
  parentId: string,
) => {
  try {
    //Dove effettivamente viene fatta la post dei nostri dati insieme al nome della raccolta e ai riferimenti al database
    addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
      parentId: parentId,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addFolder = (payload: {
  folderName: string;
  isFolder: boolean;
  fileList: object;
  parentId: string;
}) => {
  try {
    //Dove effettivamente viene fatta la post dei nostri dati insieme al nome della raccolta e ai riferimenti al database
    addDoc(files, {
      folderName: payload.folderName,
      isFolder: payload.isFolder,
      fileList: payload.fileList,
      parentId: payload.parentId,
    });
  } catch (err) {
    console.log(err);
  }
};
