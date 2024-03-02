import { useState } from "react";
import styles from "../styles/Content.module.css";
import Card from "@components/card/Card";
import EditBox from "./EditBox";
import FolderBox from "./FolderBox";

type Props = {
  id: Id;
  folderId: FolderId;
  updateFolderId: (id: Id) => void;
  linkList: LinkList[];
  folderData: FolderData[];
  inputText: string;
};

export default function Content({
  id,
  folderId,
  updateFolderId,
  linkList,
  folderData,
  inputText,
}: Props) {
  const [currentFolderName, setCurrentFolderName] = useState("전체");

  const updateFolderName = (name: string) => {
    setCurrentFolderName(name);
  };

  return (
    <>
      <FolderBox
        folderData={folderData}
        id={id}
        folderId={folderId}
        updateFolderId={updateFolderId}
        updateFolderName={updateFolderName}
      />
      <EditBox folderId={folderId} currentFolderName={currentFolderName} />
      <div className={styles.wrapper}>
        {linkList.map((link) => {
          const searchText = inputText.toLowerCase();
          const { id, title, description, url } = link;

          if (
            inputText &&
            (title?.includes(searchText) ||
              description?.includes(searchText) ||
              url?.includes(searchText))
          ) {
            return <Card key={id} folderData={folderData} link={link} />;
          } else if (!inputText) {
            return <Card key={id} folderData={folderData} link={link} />;
          }
          return null;
        })}
      </div>
    </>
  );
}
