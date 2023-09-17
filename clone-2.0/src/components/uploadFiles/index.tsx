import React, { ChangeEvent, useState } from "react";
import styles from "./uploadFiles.module.scss";
import Button from "../common/Button/Button";
import { fileUpload } from "../../API/FileUpload";

export default function UploadFiles() {
  const [isFileVisible, setFileVisible] = useState(false);
  // const [file, setFile] = useState({});
  const uploadFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload({ file });
  };
  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => setFileVisible(!isFileVisible)}
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
      <Button title="Aggiungi cartella" btnClass="btn-primary btn-outline" />
    </div>
  );
}
