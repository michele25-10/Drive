import React from "react";
import TopBar from "../TopBar/index";
import UploadFiles from "@/components/uploadFiles/index";

export default function HomeComponent() {
  return (
    <div>
      <TopBar />
      <UploadFiles />
    </div>
  );
}

module.exports = HomeComponent;
