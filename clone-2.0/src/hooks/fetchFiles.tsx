import React, { useEffect, useState } from "react";
import { database } from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

// Dove vogliamo aggiungere il nome della raccolta e i riferimenti al database
let files = collection(database, "files");

export const fetchFiles = () => {
  const [fileList, setFileList] = useState<ArrayType>([
    {
      imageLink: "",
      id: "",
    },
  ]);

  //Il mio componente farà qualcosa dopo aver eseguito il rendering
  useEffect(() => {
    //con onSnapshot ogni volta che il contenuto cambia, un'altra chiamata aggiorna l'istantanea del documento.
    return onSnapshot(files, (response) => {
      setFileList(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      );
    });
  }, []);

  return { fileList };
};
