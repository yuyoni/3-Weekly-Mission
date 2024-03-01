import { useEffect, useState } from "react";
import fetchData from "../_apis/api";

export default function useFetchData(param) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(param);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAsync();
  }, [param]);

  return data;
}
