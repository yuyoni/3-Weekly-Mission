import SearchBar from "@components/searchbar/SearchBar";
import useFetchData from "@hooks/useFetchData";
import SearchContent from "@pages/components/common/SearchContent";
import { useEffect, useState } from "react";
import styles from "../styles/Content.module.css";

type Props = {
  id?: Id;
  folderId: Id;
};

export default function Content({ id, folderId }: Props) {
  const [inputText, setInputText] = useState<string>("");
  const [folders, setFolders] = useState<FolderData[] | null>(null);
  const [links, setLinks] = useState<LinkList[] | null>(null);

  const data = useFetchData<FolderData[]>(`users/${id}/folders`);
  const linkData = useFetchData<LinkList[]>(`folders/${folderId}/links`);

  useEffect(() => {
    if (data) {
      setFolders(data);
    }
    if (linkData) {
      setLinks(linkData);
    }
  }, [data, linkData]);

  const updateInputText = (value: string) => {
    setInputText(value);
  };

  return (
    <main className={styles.content}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      <SearchContent inputText={inputText} links={links} folders={folders} />
    </main>
  );
}
