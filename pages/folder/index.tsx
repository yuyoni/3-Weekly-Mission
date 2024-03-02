import useFetchData from "@hooks/useFetchData";
import Layout from "pages/components/common/Layout";
import { useEffect, useState } from "react";
import AddLink from "./components/AddLink";
import FolderLinkContainer from "./components/FolderLinkContainer";
import styles from "./folder.module.css";

export default function Folder() {
  const [id, setId] = useState<number | null>(null);
  const userId = useFetchData<UserId>(`users`);

  useEffect(() => {
    if (!userId) {
      setId(4); // 임시 값
    } else {
      setId(userId.id);
    }
  }, []);

  const folderData = useFetchData<FolderData[]>(`users/${id}/folders`);

  if (!folderData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Layout>
        <div className={styles.wrapper}>
          <AddLink folderData={folderData[0]} />
          <FolderLinkContainer id={id} folderData={folderData} />
        </div>
      </Layout>
    </div>
  );
}
