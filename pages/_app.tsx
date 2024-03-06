import { fetchData } from "@apis/fetchData";
import useAccessToken from "@hooks/useAccessToken";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import "@styles/globals.css";
import camelcaseKeys from "camelcase-keys";

declare global {
  interface Window {
    Kakao: any;
  }
}

export const CurrentUserContext = React.createContext<User | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);

  const accessToken = useAccessToken();

  useEffect(() => {
    const fetchUser = async () => {
      if (accessToken) {
        try {
          const response = await fetchData("users", "GET", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const currentUser = camelcaseKeys(response[0]);
          console.log(currentUser);
          setUser(currentUser);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };

    fetchUser();
  }, [accessToken]);

  return (
    <CurrentUserContext.Provider value={user}>
      <Component {...pageProps} />
    </CurrentUserContext.Provider>
  );
}
