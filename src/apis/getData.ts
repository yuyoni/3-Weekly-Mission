import axios from "axios";
import { getCookie } from "cookies-next";

interface GetDataParams {
  endpoint: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function getData<T>({
  endpoint,
}: GetDataParams): Promise<T> {
  const token = getCookie("accessToken");
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : undefined;

  const response = await axios.get(`${BASE_URL}${endpoint}`, { headers });
  return response.data;
}
