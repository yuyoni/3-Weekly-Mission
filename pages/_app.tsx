import { fetchData } from "@apis/fetchData";
import useAccessToken from "@hooks/useAccessToken";
import "@styles/globals.css";
import camelcaseKeys from "camelcase-keys";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export const CurrentUserContext = React.createContext<User | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const accessToken = useAccessToken();

  useEffect(() => {
    (async () => {
      if (accessToken) {
        const data = await fetchData("users", "GET", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (data) {
          setCurrentUser(camelcaseKeys(data[0]));
        }
      }
    })();
  }, [accessToken]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Component {...pageProps} />
    </CurrentUserContext.Provider>
  );
}
