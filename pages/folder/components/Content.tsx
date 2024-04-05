import SearchContent from "@components/common/SearchContent";
import { useEffect, useState } from "react";
import { FolderData, LinkList } from "type";
import EditBox from "./EditBox";
import FolderBox from "./FolderBox";

const FOLDER_NAME = {
  ALL: "전체",
};

type FolderContentProps = {
  isFolderPending: boolean;
  isLinkPending: boolean;
  userId: number | null;
  folderId: number | null;
  updateFolderId: (folderId: number | null) => void;
  links: LinkList[] | undefined;
  folders: FolderData[] | undefined;
  inputText: string;
};

export default function Content({
  isFolderPending,
  isLinkPending,
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
    const folder = folders?.find((folder) => folder.id === folderId);
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
        isFolderPending={isFolderPending}
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
      <SearchContent
        isLinkPending={isLinkPending}
        inputText={inputText}
        links={links}
        folders={folders}
      />
    </>
  );
}
