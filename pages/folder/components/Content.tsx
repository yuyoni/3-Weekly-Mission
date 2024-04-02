import SearchContent from "src/components/common/SearchContent";
import { useEffect, useState } from "react";
import EditBox from "./EditBox";
import FolderBox from "./FolderBox";
import { FolderData, FolderId, Id, LinkList } from "type";

const FOLDER_NAME = {
  ALL: "전체",
};

type FolderContentProps = {
  userId: Id;
  folderId: FolderId;
  updateFolderId: (folderId: Id) => void;
  links: LinkList[];
  folders: FolderData[];
  inputText: string;
};

export default function Content({
  userId,
  folderId,
  updateFolderId,
  links,
  folders,
  inputText,
}: FolderContentProps) {
  const [currentFolderName, setCurrentFolderName] = useState(
    FOLDER_NAME["ALL"]
  );

  useEffect(() => {
    const folder = folders.find((folder) => folder.id === folderId);
    if (folder) {
      setCurrentFolderName(folder.name);
    } else {
      setCurrentFolderName(FOLDER_NAME["ALL"]);
    }
  }, [folderId, folders]);

  const updateFolder = (folderId: number | null, name: string) => {
    updateFolderId(folderId);
  };

  return (
    <>
      <FolderBox
        folders={folders}
        userId={userId}
        folderId={folderId}
        updateFolder={updateFolder}
      />
      <EditBox
        userId={userId}
        folderId={folderId}
        currentFolderName={currentFolderName}
      />
      <SearchContent inputText={inputText} links={links} folders={folders} />
    </>
  );
}
