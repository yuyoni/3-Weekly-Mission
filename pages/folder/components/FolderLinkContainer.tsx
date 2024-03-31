import getData from "@apis/getData";
import SearchBar from "@components/searchbar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FolderData, Id, LinkList } from "type";
import styles from "../styles/FolderLinkContainer.module.css";
import Content from "./Content";

type FolderLinkContainerProps = { id: Id };

export default function FolderLinkContainer({ id }: FolderLinkContainerProps) {
  const [folderId, setFolderId] = useState<Id>(null);
  const [inputText, setInputText] = useState<string>("");

  const endpoint = folderId
    ? `folders/${folderId}/links`
    : `/users/${id}/links`;

  const updateInputText = (value: string) => {
    setInputText(value);
  };

  const updateFolderId = (id: Id) => {
    setFolderId(id);
  };

  const {
    data: folderData,
    isPending,
    isError,
  } = useQuery<FolderData[]>({
    queryKey: ["folderData", folderId],
    queryFn: () => getData({ endpoint: `/users/${id}/folders` }),
  });

  const {
    data: linkData,
    isPending: isLinkPending,
    isError: isLinkError,
  } = useQuery<LinkList[]>({
    queryKey: ["linkData", folderId, id],
    queryFn: () => getData({ endpoint }),
  });

  if (isPending) return "loading...";
  if (isLinkPending) return "link loading...";

  if (isError) return "error";
  if (isLinkError) return "link error";

  return (
    <main className={styles.main}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      <Content
        id={id}
        folderId={folderId}
        updateFolderId={updateFolderId}
        links={linkData}
        folders={folderData}
        inputText={inputText}
      />
    </main>
  );
}
