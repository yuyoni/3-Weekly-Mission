import SearchContent from "@pages/components/common/SearchContent";
import { useState } from "react";
import EditBox from "./EditBox";
import FolderBox from "./FolderBox";
import { FolderData, FolderId, Id, LinkList } from "type";

const FOLDER_NAME = {
  ALL: "전체",
};

type FolderContentProps = {
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
}: FolderContentProps) {
  const [currentFolderName, setCurrentFolderName] = useState(
    FOLDER_NAME["ALL"]
  );

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
      <SearchContent inputText={inputText} links={links} folders={folders} />
    </>
  );
}
