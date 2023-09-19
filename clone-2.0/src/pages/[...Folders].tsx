import React from "react";
import { useRouter } from "next/router";
import UploadFiles from "@/components/uploadFiles/index";
import ShowFiles from "@/components/showFiles/index";
import TopBar from "@/components/TopBar/index";

export default function Folders() {
  const router = useRouter();
  let parentId = router?.query?.id;
  return (
    <div>
      <TopBar />

      <UploadFiles parentId={parentId as string} />
      <ShowFiles parentId={parentId as string} />
    </div>
  );
}
