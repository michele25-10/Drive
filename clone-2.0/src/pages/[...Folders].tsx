import React from "react";
import { useRouter } from "next/router";
import UploadFiles from "@/components/uploadFiles/index";
import ShowFiles from "@/components/showFiles/index";
import TopBar from "@/components/TopBar/index";
import { useFetchSession } from "@/hooks/useSession";

export default function Folders() {
  let { session } = useFetchSession();
  const router = useRouter();
  let parentId = router?.query?.id;
  return (
    <div>
      <TopBar />

      {session ? (
        <>
          <UploadFiles parentId={parentId as string} />
          <ShowFiles parentId={parentId as string} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
