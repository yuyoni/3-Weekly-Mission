import getData from "@apis/getData";
import { useQuery } from "@tanstack/react-query";
import Layout from "pages/components/common/Layout";
import { User } from "type";
import AddLink from "./components/AddLink";
import FolderLinkContainer from "./components/FolderLinkContainer";
import styles from "./folder.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

export default function Folder() {
  const router = useRouter();
  const accessToken = getCookie("accessToken");
  const {
    data: userInfo,
    isPending,
    isError,
  } = useQuery<User[]>({
    queryKey: ["userInfo"],
    queryFn: () => getData({ endpoint: "/users", token: accessToken }),
    enabled: !!accessToken,
  });

  if (isPending) return "loading...";
  if (isError) return "error";

  return (
    <div>
      <Layout>
        {userInfo && (
          <div className={styles.wrapper}>
            <AddLink userId={userInfo[0].id} />
            <FolderLinkContainer userId={userInfo[0].id} />
          </div>
        )}
      </Layout>
    </div>
  );
}
