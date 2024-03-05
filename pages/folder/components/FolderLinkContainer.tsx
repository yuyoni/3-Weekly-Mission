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
  const [links, setLinks] = useState<LinkList[]>([]);

  const updateInputText = (value: string) => {
    setInputText(value);
  };

  const updateFolderId = (id: Id) => {
    setFolderId(id);
  };

  const data = useFetchData<FolderData[]>(`users/${id}/folders`);
  const linkData = useFetchData<LinkList[]>(
    folderId ? `folders/${folderId}/links` : `users/${id}/links`
  );

  useEffect(() => {
    if (data) {
      setFolders(data);
    }
    if (linkData) {
      setLinks(linkData);
    }
  }, [data, linkData]);

  return (
    <main className={styles.main}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      <Content
        id={id}
        folderId={folderId}
        updateFolderId={updateFolderId}
        links={links}
        folders={folders}
        inputText={inputText}
      />
    </main>
  );
}
