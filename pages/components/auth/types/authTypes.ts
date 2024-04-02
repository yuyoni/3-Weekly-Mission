export interface EmailCheckType {
  email: string;
}

export interface EmailCheckResponseType {
  isUsableEmail: boolean;
}

export interface FormDataType {
  email: string;
  password: string;
}

export interface AuthResponseType {
  accessToken: string;
  refreshToken: string;
}
