import getData from "@apis/getData";
import Layout from "@components/common/Layout";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { LinkList, User } from "type";
import Content from "../components/Content";
import FolderInfo from "../components/FolderInfo";
import styles from "./styles/Shared.module.css";

export default function Shared() {
  const { userId, folderId } = useRouter().query;

  const {
    data: userInfo,
    isPending,
    isError,
  } = useQuery<User[]>({
    queryKey: ["userInfo"],
    queryFn: () => getData({ endpoint: `/users/${userId}` }),
    enabled: !!userId,
  });

  const {
    data: linkData,
    isPending: isLinkPending,
    isError: isLinkError,
  } = useQuery<LinkList[]>({
    queryKey: ["linkData", folderId, userId],
    queryFn: () => getData({ endpoint: `/folders/${folderId}/links` }),
    enabled: !!folderId,
  });

  if (isPending) return "loading...";
  if (isError) return "error";

  if (isLinkPending) return "link loading...";
  if (isLinkError) return "link error";

  return (
    <Layout>
      <div className={styles.container}>
        {userInfo && linkData && (
          <>
            <FolderInfo userInfo={userInfo[0]} folderId={Number(folderId)} />
            <Content id={userInfo[0].id} linkData={linkData} />
          </>
        )}
      </div>
    </Layout>
  );
}
