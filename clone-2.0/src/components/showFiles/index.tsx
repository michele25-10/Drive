import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import { AiFillFile, AiFillFolder } from "react-icons/ai";

export default function ShowFiles() {
  let { fileList } = fetchFiles();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };
  return (
    <div className={styles.fileGrid}>
      {fileList.map(
        (file: {
          imageLink: "";
          id: "";
          imageName: "";
          isFolder: false;
          folderName: "";
        }) => {
          return (
            <div>
              <div
                key={file.id}
                className={`${styles.files} bg-green-500`}
                onClick={() => openFile(file.imageLink)}
              >
                {file.isFolder ? (
                  <>
                    <AiFillFolder size={80} />
                    <p>{file.folderName}</p>
                  </>
                ) : (
                  <>
                    <img className={styles.imageLink} src={file.imageLink} />
                    {/*<AiFillFile size={80} />*/}
                    <p>{file.imageName}</p>
                  </>
                )}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}
