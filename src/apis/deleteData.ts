import axios from "axios";
import { CookieValueTypes } from "cookies-next";

interface DeleteDataParams {
  endpoint: string;
  token: CookieValueTypes;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function deleteData<T>({
  endpoint,
  token,
}: DeleteDataParams): Promise<T> {
  const response = await axios.delete(`${BASE_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
