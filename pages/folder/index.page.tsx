import getData from "@apis/getData";
import useRedirect from "@hooks/useRedirect";
import { useQuery } from "@tanstack/react-query";
import Layout from "pages/components/common/Layout";
import { User } from "type";
import AddLink from "./components/AddLink";
import FolderLinkContainer from "./components/FolderLinkContainer";
import styles from "./folder.module.css";

export default function Folder() {
  useRedirect("/signin");

  const {
    data: userData,
    isPending,
    isError,
  } = useQuery<User[]>({
    queryKey: ["userInfo"],
    queryFn: () => getData({ endpoint: "/users" }),
  });

  if (isPending) return "loading...";
  if (isError) return "error";

  return (
    <div>
      <Layout>
        {userData ? (
          <div className={styles.wrapper}>
            <AddLink id={userData[0].id} />
            <FolderLinkContainer id={userData[0].id} />
          </div>
        ) : (
          <></>
        )}
      </Layout>
    </div>
  );
}
