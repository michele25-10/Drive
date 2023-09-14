import React from "react";
import styles from "./uploadFiles.module.scss";
import Button from "../common/Button/Button";

export default function UploadFiles() {
  return (
    <div className={styles.uploadMain}>
      <Button title="Aggiungi file" btnClass="btn-primary" />

      <Button title="Aggiungi cartella" btnClass="btn-primary btn-outline" />
    </div>
  );
}
