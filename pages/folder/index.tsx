import useFetchData from "@hooks/useFetchData";
import Layout from "pages/components/common/Layout";
import { useEffect, useState } from "react";
import AddLink from "./components/AddLink";
import FolderLinkContainer from "./components/FolderLinkContainer";
import styles from "./folder.module.css";

export default function Folder() {
  const [id, setId] = useState<Id>();

  // const data = useFetchData<User[]>("users");
  const data = useFetchData<User[]>("sample/users");

  useEffect(() => {
    if (data) {
      setId(data[0].id);
    }
  }, [data]);

  return (
    <div>
      <Layout>
        {id ? (
          <div className={styles.wrapper}>
            <AddLink id={id} />
            <FolderLinkContainer id={id} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Layout>
    </div>
  );
}
