import getData from "@apis/getData";
import SearchBar from "src/components/searchbar/SearchBar";
import SearchContent from "src/components/common/SearchContent";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FolderData, FolderId, Id, LinkList } from "type";
import styles from "../styles/Content.module.css";

type ShredContentProps = {
  id?: Id;
  linkData: LinkList[];
};

export default function Content({ id, linkData }: ShredContentProps) {
  const [inputText, setInputText] = useState<string>("");

  const {
    data: folderData,
    isPending,
    isError,
  } = useQuery<FolderData[]>({
    queryKey: ["folderData"],
    queryFn: () => getData({ endpoint: `/users/${id}/folders` }),
  });

  const updateInputText = (value: string) => {
    setInputText(value);
  };

  if (isPending) return "loading...";
  if (isError) return "error";

  return (
    <main className={styles.content}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      <SearchContent
        inputText={inputText}
        links={linkData}
        folders={folderData}
      />
    </main>
  );
}
