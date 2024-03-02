import SearchBar from "@components/searchbar/SearchBar";
import useFetchData from "@hooks/useFetchData";
import { useState } from "react";
import styles from "../styles/FolderLinkContainer.module.css";
import Content from "./Content";

type Props = { id: Id; folderData: FolderData[] };

export default function FolderLinkContainer({ id, folderData }: Props) {
  const [folderId, setFolderId] = useState<Id>(null);
  const [inputText, setInputText] = useState<string>("");

  const linkList = useFetchData<LinkList[]>(
    `users/${id}/links?folderId=${folderId}`
  );
  const userInfo = useFetchData(`users/${id}`);

  const updateInputText = (value: string) => {
    setInputText(value);
  };

  const updateFolderId = (id: Id) => {
    setFolderId(id);
  };

  return (
    <main className={styles.main}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      {linkList ? (
        <Content
          id={id}
          folderId={folderId}
          updateFolderId={updateFolderId}
          linkList={linkList}
          folderData={folderData}
          inputText={inputText}
        />
      ) : (
        <p>저장된 링크가 없습니다</p>
      )}
    </main>
  );
}
