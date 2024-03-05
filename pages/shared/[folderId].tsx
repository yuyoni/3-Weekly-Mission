import Layout from "@components/common/Layout";
import { CurrentUserContext } from "@pages/_app";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Content from "./components/Content";
import FolderInfo from "./components/FolderInfo";
import styles from "./styles/Shared.module.css";

export default function Shared() {
  const { folderId } = useRouter().query;
  const currentUser = useContext(CurrentUserContext);
  const [id, setId] = useState<Id | null>(null);

  useEffect(() => {
    if (currentUser) {
      setId(currentUser.id);
    }
  }, [currentUser]);

  return (
    <Layout>
      <div className={styles.container}>
        {folderId ? (
          <>
            <FolderInfo id={id} folderId={+folderId} />
            <Content id={id} folderId={+folderId} />
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
}
