import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useRedirect(path: string) {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push(path);
    }
  }, [router]);
}
