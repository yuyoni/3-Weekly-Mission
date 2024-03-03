import useFetchData from "@hooks/useFetchData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles/Shared.module.css";
import FolderInfo from "./components/FolderInfo";
import Contents from "./components/Contents";
import Layout from "@components/common/Layout";

export default function Shared() {
  // const id = useFetchData(`users`);
  const [id, setId] = useState<Id>(null);
  const { folderId } = useRouter().query;

  // const currentUser = useFetchData<User[]>(`users`);
  const currentUser = useFetchData<User[]>(`sample/users`);

  useEffect(() => {
    if (currentUser) {
      setId(currentUser[0].id);
    }
  }, [currentUser]);

  return (
    <Layout>
      <div className={styles.container}>
        {folderId ? (
          <>
            <FolderInfo id={id} folderId={+folderId} />
            <Contents id={id} folderId={+folderId} />
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
}
