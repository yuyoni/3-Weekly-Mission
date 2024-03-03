import { useState } from "react";
import styles from "../styles/Content.module.css";
import Card from "@components/card/Card";
import EditBox from "./EditBox";
import FolderBox from "./FolderBox";

type Props = {
  id: Id;
  folderId: FolderId;
  updateFolderId: (id: Id) => void;
  links: LinkList[];
  folders: FolderData[];
  inputText: string;
};

export default function Content({
  id,
  folderId,
  updateFolderId,
  links,
  folders,
  inputText,
}: Props) {
  const [currentFolderName, setCurrentFolderName] = useState("전체");

  const updateFolder = (id: number | null, name: string) => {
    setCurrentFolderName(name);
    updateFolderId(id);
  };

  return (
    <>
      <FolderBox
        folders={folders}
        id={id}
        folderId={folderId}
        updateFolder={updateFolder}
      />
      <EditBox
        id={id}
        folderId={folderId}
        currentFolderName={currentFolderName}
      />
      <div className={styles.wrapper}>
        {links ? (
          links.map((link) => {
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
        ) : (
          <>"저장된 링크가 없습니다"</>
        )}
      </div>
    </>
  );
}
