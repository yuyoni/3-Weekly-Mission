import { useState } from "react";
import styled from "styled-components";
import AddLink from "../components/folder/AddLink";
import Content from "../components/folder/Content";
import EditBox from "../components/folder/EditBox";
import FolderBox from "../components/folder/FolderBox";
import SearchBar from "../components/searchbar/SearchBar";

export default function Folder() {
  const [folderId, setFolderId] = useState("");
  const [folderName, setFolderName] = useState("전체");

  return (
    <Wrapper className="folder">
      <AddLink />
      <Container>
        <SearchBar />
        <FolderBox
          folderId={folderId}
          setFolderId={setFolderId}
          setFolderName={setFolderName}
        />
        <EditBox folderId={folderId} folderName={folderName} />
        <Content folderId={folderId} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled.div``;
