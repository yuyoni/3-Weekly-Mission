import styled from "styled-components";
import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import useFetchData from "../hooks/useFetchData";
import Card from "../components/Card";
import convertKeyToCamelCase from "../utils/convertKeyToCamelCase";
import add from "../assets/add.svg";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FolderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FolderList = styled.div`
  display: flex;
  gap: 8px;
`;
const FolderElement = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${({ isSelected }) => (isSelected ? "#6d6afe" : "#fff")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  cursor: pointer;
`;

export default function Shared() {
  const [folderId, setFolderId] = useState("");

  const folderData = useFetchData("users/1/folders")?.data;
  const linkData = useFetchData(`users/1/links?folderId=${folderId}`)?.data;

  console.log(folderData);

  const handleClick = (clickedFolderId) => {
    setFolderId(clickedFolderId);
    console.log(clickedFolderId);
  };

  return (
    <Container className="Folder">
      <AddLink />
      <main>
        <SearchBar />
        <FolderBox>
          <FolderList>
            <FolderElement
              isSelected={folderId === ""}
              onClick={() => handleClick("")}
            >
              전체
            </FolderElement>
            {folderData
              ? folderData.map((folder) => {
                  return (
                    <FolderElement
                      key={folder.id}
                      isSelected={folderId === folder.id}
                      onClick={() => handleClick(folder.id)}
                    >
                      {folder.name}
                    </FolderElement>
                  );
                })
              : null}
          </FolderList>
          <img src={add} alt="add-icon" />
        </FolderBox>
        <div className="cards">
          {linkData
            ? linkData.map((link) => {
                const newLink = convertKeyToCamelCase(link);
                return <Card key={newLink.id} link={newLink} />;
              })
            : null}
        </div>
      </main>
    </Container>
  );
}
