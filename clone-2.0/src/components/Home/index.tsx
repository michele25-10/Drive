import React from "react";
import { useFetchSession } from "@/hooks/useSession";
import { signIn, signOut } from "next-auth/react";
import Button from "@/components/common/Button";
import styles from "./Home.module.scss";

export default function HomeComponent() {
  let { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <img
          className={styles.profileImg}
          src={session?.user.image as string}
        />
      ) : (
        /*<Button
        onClick={() => signOut()}
        btnClass="btn-danger"
        title="Log Out"
      />*/
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="Sign Up!"
        />
      )}
    </div>
  );
}

module.exports = HomeComponent;
