export type Id = number | null;
export type FolderId = number | null;
export type CreateAt = string;
export type Name = string;

export interface User {
  id: Id;
  name: Name;
  email: string;
  imageSource: string;
  createdAt?: CreateAt;
}

export interface LinkList {
  id: number;
  title: string;
  createdAt: CreateAt;
  description: string;
  url: string;
  imageSource: string;
}

export interface FolderData {
  id: Id;
  createdAt: CreateAt;
  name: Name;
  favorite: boolean;
  linkCount: number;
}

export interface FolderInfo {
  id: number;
  createdAt: string;
  favorite: boolean;
  name: string;
  userId: number;
}

export interface SigninData {
  email: string;
  password: string;
}

interface SignupData extends SigninData {
  passwordCheck?: string;
}
