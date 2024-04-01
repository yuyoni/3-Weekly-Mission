import axios from "axios";
import { CookieValueTypes, getCookie } from "cookies-next";

interface DeleteDataParams {
  endpoint: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function deleteData<T>({
  endpoint,
}: DeleteDataParams): Promise<T> {
  const token = getCookie("accessToken");
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : undefined;
  const response = await axios.delete(`${BASE_URL}${endpoint}`, {
    headers,
  });
  return response.data;
}
