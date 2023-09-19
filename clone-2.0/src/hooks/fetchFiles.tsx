import React, { useEffect, useState } from "react";
import { database } from "@/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useFetchSession } from "@/hooks/useSession";

// Dove vogliamo aggiungere il nome della raccolta e i riferimenti al database
let files = collection(database, "files");

export const fetchFiles = (parentId: string, userEmail: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);
  let { session } = useFetchSession();

  const getFolder = () => {
    if (userEmail) {
      let emailQuery = query(files, where("userEmail", "==", userEmail));
      if (!parentId) {
        //con onSnapshot ogni volta che il contenuto cambia, un'altra chiamata aggiorna l'istantanea del documento.
        onSnapshot(emailQuery, (response) => {
          //se parentId è null allora prendo l'archivio di tutte le cartelle e file aventi parent ID nullo
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === ""),
          );
        });
      } else {
        // altrimenti prendo l'archivio di file avente parentID quello che viene passato alla funzione
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === parentId),
          );
        });
      }
    }
  };

  //Il mio componente farà qualcosa dopo aver eseguito il rendering
  useEffect(() => {
    getFolder();
  }, [parentId, userEmail]);

  return { fileList };
};
