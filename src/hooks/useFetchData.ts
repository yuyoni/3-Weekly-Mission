import { fetchData } from "@apis/fetchData";
import { useEffect, useState } from "react";
import camelcaseKeys from "camelcase-keys";

export default function useFetchData<T>(
  param: string,
  method = "GET",
  body?: T
) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchData(param, method, body);
        setData(camelcaseKeys(result));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [param]);

  return data;
}
