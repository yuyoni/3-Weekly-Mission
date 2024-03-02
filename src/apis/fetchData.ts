import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchData(param: string, method = "GET", data?: any) {
  const url = `${BASE_URL}${param}`;

  if (method === "POST") {
    const response = await axios.post(url, data);
    return response.data;
  }

  const response = await axios.get(url, data);
  return response.data;
}
