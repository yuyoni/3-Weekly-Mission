import getData from "@apis/getData";
import SearchBar from "@components/searchbar/SearchBar";
import SearchContent from "@pages/components/common/SearchContent";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FolderData, FolderId, Id, LinkList } from "type";
import styles from "../styles/Content.module.css";

type ShredContentProps = {
  id?: Id;
  folderId: FolderId;
};

export default function Content({ id, folderId }: ShredContentProps) {
  const [inputText, setInputText] = useState<string>("");

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
    queryFn: () => getData({ endpoint: `/folders/${folderId}/links` }),
  });

  const updateInputText = (value: string) => {
    setInputText(value);
  };

  if (isPending) return "loading...";
  if (isError) return "error";

  if (isLinkPending) return "link loading...";
  if (isLinkError) return "link error";

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
