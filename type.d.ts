export interface User {
  id: number;
  name: string;
  email: string;
  image_source: string;
  created_at?: string;
}

export interface LinkList {
  id: number;
  favorite: boolean;
  title: string;
  created_at: string;
  description: string;
  url: string;
  image_source: string;
}

export interface FolderData {
  id: number;
  created_at: string;
  name: string;
  favorite: boolean;
  link_count: number;
}

export interface FolderInfoResponseType {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
}

export interface FolderInfo extends FolderInfoResponseType {
  user_id: number;
}

export interface SigninData {
  email: string;
  password: string;
}

interface SignupData extends SigninData {
  passwordCheck?: string;
}
