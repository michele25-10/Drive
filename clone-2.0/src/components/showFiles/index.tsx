import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "@/hooks/fetchFiles";
import { AiFillFile, AiFillFolder } from "react-icons/ai";
import { useRouter } from "next/router";
import { useFetchSession } from "@/hooks/useSession";
import ThreeOptionIcon from "@/components/common/ThreeOptionIcon/threeOptionIcon";

export default function ShowFiles({ parentId }: FolderStructure) {
  let { session } = useFetchSession();
  let { fileList } = fetchFiles(parentId, session?.user.email as string);

  const router = useRouter();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };
  return (
    <div className={styles.fileGrid}>
      {fileList.map(
        (file: {
          imageLink: "";
          id: "";
          imageName: "";
          isFolder: false;
          folderName: "";
        }) => {
          return (
            <div key={file.id}>
              {file.isFolder ? (
                <>
                  <div
                    className={styles.files}
                    onClick={() => router.push(`/folder?id=${file.id}`)} //mi permette di aprire il file in pages [...folder].tsx
                  >
                    <AiFillFolder size={80} />
                    <p>{file.folderName}</p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    key={file.id}
                    className={`${styles.files} bg-green-500`}
                    //onClick={() => openFile(file.imageLink)}
                  >
                    <img className={styles.imageLink} src={file.imageLink} />
                    {/*<AiFillFile size={80} />*/}
                    <p>{file.imageName}</p>
                    <div className={styles.threeOptionIcon}>
                      <ThreeOptionIcon />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        },
      )}
    </div>
  );
}
