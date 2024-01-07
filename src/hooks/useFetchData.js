import { useEffect, useState } from "react";
import fetchData from "../apis/api";

export default function useFetchData(apiEndpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(apiEndpoint);
        setData(result);
      } catch (error) {
        throw Error(error);
      }
    };

    fetchDataAsync();
  }, [apiEndpoint]);

  return data;
}
