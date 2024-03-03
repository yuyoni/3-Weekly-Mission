import { fetchData } from "@apis/fetchData";
import { useEffect, useState } from "react";
import camelcaseKeys from "camelcase-keys";

export default function useFetchData<T>(
  param: string,
  method = "GET",
  body?: any
) {
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchData(param, method, body);
        setData(camelcaseKeys(result));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [param, body]);

  return data;
}
