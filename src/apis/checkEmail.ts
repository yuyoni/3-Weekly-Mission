import { EmailCheckType } from "@pages/components/auth/types/authTypes";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function checkEmail(requestData: EmailCheckType) {
  const response = await axios.post(
    `${BASE_URL}/users/check-email`,
    requestData
  );
  return response.data;
}
