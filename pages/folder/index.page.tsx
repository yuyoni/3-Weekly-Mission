import getData from "@apis/getData";
import { useQuery } from "@tanstack/react-query";
import Layout from "@components/common/Layout";
import { User } from "type";
import AddLink from "./components/AddLink";
import FolderLinkContainer from "./components/FolderLinkContainer";
import styles from "./folder.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CookieValueTypes, getCookie } from "cookies-next";

export default function Folder() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<CookieValueTypes>();

  useEffect(() => {
    const token = getCookie("accessToken");
    setAccessToken(token);
  }, []);

  const {
    data: userInfo,
    isPending,
    isError,
  } = useQuery<User[]>({
    queryKey: ["userInfo"],
    queryFn: () => {
      if (!accessToken) router.push("/signin");
      return getData({ endpoint: "/users" });
    },
  });

  if (isError) return "error";

  return (
    <div>
      <Layout>
        <div className={styles.wrapper}>
          {isPending || (
            <>
              <AddLink userId={userInfo[0].id} />
              <FolderLinkContainer userId={userInfo[0].id} />
            </>
          )}
        </div>
      </Layout>
    </div>
  );
}
