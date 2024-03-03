import Card from "@components/card/Card";
import SearchBar from "@components/searchbar/SearchBar";
import { useEffect, useState } from "react";
import styles from "../styles/Contents.module.css";
import useFetchData from "@hooks/useFetchData";

type Props = {
  id?: Id;
  folderId: Id;
};

export default function Contents({ id, folderId }: Props) {
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

  const linksToRender = folders && links ? links : null;

  return (
    <main className={styles.content}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      <div className={styles.wrapper}>
        {linksToRender
          ? linksToRender.map((link) => {
              const searchText = inputText.toLowerCase();
              const { id, title, description, url } = link;

              if (
                inputText &&
                (title?.includes(searchText) ||
                  description?.includes(searchText) ||
                  url?.includes(searchText))
              ) {
                return <Card key={id} folders={folders} link={link} />;
              } else if (!inputText) {
                return <Card key={id} folders={folders} link={link} />;
              }
              return null;
            })
          : "저장된 링크가 없습니다"}
      </div>
    </main>
  );
}
