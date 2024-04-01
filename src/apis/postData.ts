import axios from "axios";
import { CookieValueTypes, getCookie } from "cookies-next";

interface PostDataParams {
  endpoint: string;
  requestData?: any;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function postData<T>({
  endpoint,
  requestData,
}: PostDataParams): Promise<T> {
  const token = getCookie("accessToken");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await axios.post(`${BASE_URL}${endpoint}`, requestData, {
    headers,
  });
  return response.data;
}
