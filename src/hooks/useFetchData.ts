import { fetchData } from "@apis/fetchData";
import { useEffect, useState } from "react";
import camelcaseKeys from "camelcase-keys";

export default function useFetchData<T>(
  param: string,
  method: "GET" | "POST" = "GET",
  requestData?: any
) {
  const [responseData, setResponseData] = useState<T | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchData(param, method, requestData);
        setResponseData(camelcaseKeys(result));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [param, requestData]);

  return responseData;
}
