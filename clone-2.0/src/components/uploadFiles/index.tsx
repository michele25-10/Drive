import React, { ChangeEvent, useState } from "react";
import styles from "./uploadFiles.module.scss";
import Button from "../common/Button/Button";
import { fileUpload } from "../../API/FileUpload";
import CommonProgress from "../common/Progress";
import { addFolder } from "@/API/FireStore";

export default function UploadFiles({ parentId }) {
  const [isFileVisible, setFileVisible] = useState(false);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [folderName, setFolderName] = useState("");

  const uploadFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress);
  };
  console.log(folderName);
  const uploadFolder = () => {
    let payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
    };
    addFolder(payload);
    setFolderName("");
  };

  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => {
          setFolderVisible(false);
          setFileVisible(!isFileVisible);
        }}
        title="Aggiungi file"
        btnClass="btn-info"
      />
      {isFileVisible ? (
        <input
          type="file"
          className="file-input file-input-bordered file-input-info w-full max-w-xs"
          onChange={(event) => uploadFiles(event)}
        />
      ) : (
        <></>
      )}
      <Button
        title="Aggiungi cartella"
        btnClass="btn-primary btn-outline"
        onClick={() => {
          setFileVisible(false);
          setFolderVisible(!isFolderVisible);
        }}
      />
      {isFolderVisible ? (
        <>
          <input
            type="text"
            placeholder="Nome della cartella"
            onChange={(event) => setFolderName(event.target.value)}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <Button title="Invia" btnClass="btn-primary" onClick={uploadFolder} />
        </>
      ) : (
        <></>
      )}

      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <CommonProgress progress={progress} />
      )}
    </div>
  );
}
