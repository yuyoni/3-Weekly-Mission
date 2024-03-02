import useFetchData from "@hooks/useFetchData";
import Layout from "pages/components/common/Layout";
import { useEffect, useState } from "react";
import AddLink from "./components/AddLink";
import FolderLinkContainer from "./components/FolderLinkContainer";
import styles from "./folder.module.css";

export default function Folder() {
  const [id, setId] = useState<number | null>(null);
  const [folders, setFolders] = useState<FolderData[] | null>(null);
  const userId = useFetchData<UserId>(`users`);

  useEffect(() => {
    if (!userId) {
      setId(4); // 임시 값
    } else {
      setId(userId.id);
    }
  }, []);

  const folderData = useFetchData<FolderData[]>(`users/${id}/folders`);

  useEffect(() => {
    if (folderData) {
      setFolders(folderData);
    }
  }, [folderData]);

  return (
    <div>
      <Layout>
        {folders ? (
          <div className={styles.wrapper}>
            <AddLink folders={folders} />
            <FolderLinkContainer id={id} folders={folders} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Layout>
    </div>
  );
}
