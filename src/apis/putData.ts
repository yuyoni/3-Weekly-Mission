import axios from "axios";

interface PutDataParams {
  endpoint: string;
  token: string;
  requestData: any;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function putData<T>({
  endpoint,
  token,
  requestData,
}: PutDataParams): Promise<T> {
  const response = await axios.put(`${BASE_URL}${endpoint}`, requestData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
