import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface RequestDataType {
  email: string;
}

axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function checkEmail(requestData: RequestDataType) {
  const response = await axios.post(
    `${BASE_URL}/users/check-email`,
    requestData
  );

  return response;
}
