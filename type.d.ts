type Id = number | null;
type FolderId = number | null;
type CreateAt = string;
type Name = string;

interface UserId {
  id: Id;
}

interface UserData {
  id: Id;
  createdAt: CreateAt;
  name: Name;
  imageSource: string;
  email: string;
}

interface LinkList {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface FolderData {
  id: Id;
  created_at: CreateAt;
  name: Name;
  favorite: boolean;
  link_count: number;
}
