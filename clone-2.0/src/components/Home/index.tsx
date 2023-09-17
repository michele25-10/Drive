import React from "react";
import TopBar from "../TopBar/index";
import UploadFiles from "@/components/uploadFiles/index";
import ShowFiles from "../showFiles";

export default function HomeComponent() {
  return (
    <div>
      <TopBar />
      <UploadFiles />
      <ShowFiles />
    </div>
  );
}
