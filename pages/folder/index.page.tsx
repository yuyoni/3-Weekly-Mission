import getData from "@apis/getData";
import { useQuery } from "@tanstack/react-query";
import Layout from "pages/components/common/Layout";
import { User } from "type";
import AddLink from "./components/AddLink";
import FolderLinkContainer from "./components/FolderLinkContainer";
import styles from "./folder.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Folder() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string>();
  const {
    data: userInfo,
    isPending,
    isError,
  } = useQuery<User[]>({
    queryKey: ["userInfo"],
    queryFn: () => getData({ endpoint: "/users", token: accessToken }),
    enabled: !!accessToken,
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) setAccessToken(token);
    else router.push("/signin");
  }, []);

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
