import SearchBar from "@components/searchbar/SearchBar";
import useFetchData from "@hooks/useFetchData";
import { useEffect, useState } from "react";
import styles from "../styles/FolderLinkContainer.module.css";
import Content from "./Content";

type Props = { id: Id };

export default function FolderLinkContainer({ id }: Props) {
  const [folderId, setFolderId] = useState<Id>(null);
  const [inputText, setInputText] = useState<string>("");
  const [folders, setFolders] = useState<FolderData[]>([]);

  const linkList = useFetchData<LinkList[]>(
    `users/${id}/links?folderId=${folderId}`
  );

  const updateInputText = (value: string) => {
    setInputText(value);
  };

  const updateFolderId = (id: Id) => {
    setFolderId(id);
  };

  const data = useFetchData<FolderData[]>(`users/${id}/folders`);

  useEffect(() => {
    if (data) {
      setFolders(data);
    }
  }, [data]);

  return (
    <main className={styles.main}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      {linkList ? (
        <Content
          id={id}
          folderId={folderId}
          updateFolderId={updateFolderId}
          linkList={linkList}
          folders={folders}
          inputText={inputText}
        />
      ) : (
        <p>저장된 링크가 없습니다</p>
      )}
    </main>
  );
}
