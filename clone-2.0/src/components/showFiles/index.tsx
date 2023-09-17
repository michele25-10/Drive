import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import { AiFillFile } from "react-icons/ai";

export default function ShowFiles() {
  let { fileList } = fetchFiles();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };
  return (
    <div className={styles.fileGrid}>
      {fileList.map((file: { imageLink: ""; id: ""; imageName: "" }) => {
        return (
          <div>
            <div
              key={file.id}
              className={`${styles.files} bg-green-500`}
              onClick={() => openFile(file.imageLink)}
            >
              <AiFillFile size={80} />
              <p>{file.imageName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
