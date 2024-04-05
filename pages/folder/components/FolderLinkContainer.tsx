import getData from "@apis/getData";
import SearchBar from "@components/searchbar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FolderData, LinkList } from "type";
import styles from "../styles/FolderLinkContainer.module.css";
import Content from "./Content";

type FolderLinkContainerProps = { userId: number | null };

export default function FolderLinkContainer({
  userId,
}: FolderLinkContainerProps) {
  const [folderId, setFolderId] = useState<number | null>(null);
  const [inputText, setInputText] = useState("");

  const endpoint = folderId
    ? `/folders/${folderId}/links`
    : `/users/${userId}/links`;

  const updateInputText = (value: string) => {
    setInputText(value);
  };

  const updateFolderId = (folderId: number | null) => {
    setFolderId(folderId);
  };

  const {
    data: folderData,
    isPending: isFolderPending,
    isError: isFolderError,
  } = useQuery<FolderData[]>({
    queryKey: ["folderData"],
    queryFn: () => getData({ endpoint: `/users/${userId}/folders` }),
  });

  const {
    data: linkData,
    isPending: isLinkPending,
    isError: isLinkError,
  } = useQuery<LinkList[]>({
    queryKey: ["linkData", folderId, userId],
    queryFn: () => getData({ endpoint }),
  });

  if (isFolderError) return "error";
  if (isLinkError) return "link error";

  return (
    <main className={styles.main}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      <Content
        isFolderPending={isFolderPending}
        isLinkPending={isLinkPending}
        userId={userId}
        folderId={folderId}
        updateFolderId={updateFolderId}
        links={linkData}
        folders={folderData}
        inputText={inputText}
      />
    </main>
  );
}
