import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchData(
  param: string,
  method: "GET" | "POST" = "GET",
  requestData?: any
) {
  const url = `${BASE_URL}${param}`;

  if (method === "POST") {
    const response = await axios.post(url, requestData);
    return response.data;
  }
  if (method === "GET" && requestData) {
    const response = await axios.get(url, requestData);
    return response.data;
  }
  const response = await axios.get(url);
  return response.data;
}
