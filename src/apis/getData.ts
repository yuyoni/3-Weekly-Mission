import axios from "axios";

interface GetDataParams {
  endpoint: string;
  token?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function getData<T>({
  endpoint,
  token,
}: GetDataParams): Promise<T> {
  if (token) {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  }
}
