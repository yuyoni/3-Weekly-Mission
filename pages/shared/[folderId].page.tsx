import getData from "@apis/getData";
import Layout from "@components/common/Layout";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { User } from "type";
import Content from "./components/Content";
import FolderInfo from "./components/FolderInfo";
import styles from "./styles/Shared.module.css";

export default function Shared() {
  const { folderId } = useRouter().query;
  const {
    data: userInfo,
    isPending,
    isError,
  } = useQuery<User[]>({
    queryKey: ["userInfo"],
    queryFn: () => getData({ endpoint: "/users" }),
  });

  if (isPending) return "loading...";
  if (isError) return "error";
  if (!userInfo) return "no user information";

  return (
    <Layout>
      <div className={styles.container}>
        {folderId && (
          <>
            <FolderInfo id={userInfo[0].id} folderId={Number(folderId)} />
            <Content id={userInfo[0].id} folderId={Number(folderId)} />
          </>
        )}
      </div>
    </Layout>
  );
}
