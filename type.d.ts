type Id = number | null;
type FolderId = number | null;
type CreateAt = string;
type Name = string;

interface User {
  id: Id;
  name: Name;
  email: string;
  imageSource: string;
  createdAt?: CreateAt;
}

interface LinkList {
  id: number;
  title: string;
  createdAt: CreateAt;
  description: string;
  url: string;
  imageSource: string;
}

interface FolderData {
  id: Id;
  createdAt: CreateAt;
  name: Name;
  favorite: boolean;
  linkCount: number;
}
