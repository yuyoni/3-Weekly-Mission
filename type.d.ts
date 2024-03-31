export type Id = number | null;
export type FolderId = number | null;
export type CreateAt = string;
export type Name = string;

export interface User {
  id: Id;
  name: Name;
  email: string;
  image_source: string;
  created_at?: CreateAt;
}

export interface LinkList {
  id: number;
  title: string;
  created_at: CreateAt;
  description: string;
  url: string;
  image_source: string;
}

export interface FolderData {
  id: Id;
  created_at: CreateAt;
  name: Name;
  favorite: boolean;
  link_count: number;
}

export interface FolderInfoResponseType {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
}

export interface FolderInfo extends FolderInfoResponse {
  user_id: number;
}

export interface SigninData {
  email: string;
  password: string;
}

interface SignupData extends SigninData {
  passwordCheck?: string;
}
