import useFetchData from "@hooks/useFetchData";
import Layout from "pages/components/common/Layout";
import { useContext, useEffect, useState } from "react";
import AddLink from "./components/AddLink";
import FolderLinkContainer from "./components/FolderLinkContainer";
import styles from "./folder.module.css";
import useRedirect from "@hooks/useRedirect";
import { CurrentUserContext } from "@pages/_app";

export default function Folder() {
  useRedirect("/signin");

  const currentUser = useContext(CurrentUserContext);
  const [id, setId] = useState<Id | null>(null);

  useEffect(() => {
    if (currentUser) {
      setId(currentUser.id);
    }
  }, [currentUser]);

  return (
    <div>
      <Layout>
        {id ? (
          <div className={styles.wrapper}>
            <AddLink id={id} />
            <FolderLinkContainer id={id} />
          </div>
        ) : (
          <></>
        )}
      </Layout>
    </div>
  );
}
