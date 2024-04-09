import getData from "@apis/getData";
import SearchBar from "@components/searchbar/SearchBar";
import SearchContent from "@components/common/SearchContent";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FolderData, LinkList } from "type";
import styles from "../styles/Content.module.css";

type ShredContentProps = {
  id?: number | null;
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

  if (isError) return "error";

  return (
    <main className={styles.content}>
      <SearchBar inputText={inputText} updateInputText={updateInputText} />
      <SearchContent
        isLinkPending={isPending}
        isFolder={false}
        inputText={inputText}
        links={linkData}
        folders={folderData}
      />
    </main>
  );
}
