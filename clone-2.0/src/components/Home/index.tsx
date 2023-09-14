import React from "react";
import TopBar from "../TopBar/index";
import { signIn, signOut } from "next-auth/react";
import Button from "@/components/common/Button/Button";
import styles from "./Home.module.scss";
import UploadFiles from "../uploadFiles";

export default function HomeComponent() {
  return (
    <div>
      <TopBar />
      <UploadFiles />
    </div>
  );
}

module.exports = HomeComponent;
