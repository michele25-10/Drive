import React from "react";
import { useRouter } from "next/router";
import UploadFiles from "@/components/uploadFiles/index";

export default function Folders() {
  const router = useRouter();
  let parentId = router?.query?.id;
  return (
    <div>
      <UploadFiles parentId={parentId} />
    </div>
  );
}
