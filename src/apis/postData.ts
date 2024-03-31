import axios from "axios";

interface PostDataParams {
  endpoint: string;
  token?: string;
  requestData?: any;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function postData<T>({
  endpoint,
  token,
  requestData,
}: PostDataParams): Promise<T> {
  if (token) {
    const response = await axios.post(`${BASE_URL}${endpoint}`, requestData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } else {
    const response = await axios.post(`${BASE_URL}${endpoint}`, requestData);
    return response.data;
  }
}
