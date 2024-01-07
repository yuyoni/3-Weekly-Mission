import styled from "styled-components";
import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import useFetchData from "../hooks/useFetchData";
import Card from "../components/Card";
import convertKeyToCamelCase from "../utils/convertKeyToCamelCase";
import add from "../assets/add.svg";
import share from "../assets/share.svg";
import pen from "../assets/pen.svg";
import trashcan from "../assets/trashcan.svg";
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

const EditBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const Edit = styled.div`
  display: flex;
  gap: 12px;
  & span {
    font-size: 14px;
    color: #9fa6b2;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  justify-content: space-between;
`;

export default function Shared() {
  const [folderId, setFolderId] = useState("");
  const [folderName, setFolderName] = useState("전체");

  const folderData = useFetchData("users/1/folders")?.data;
  const linkData = useFetchData(`users/1/links?folderId=${folderId}`)?.data;

  const handleClick = (clickedFolderId, clickedFolderName) => {
    setFolderId(clickedFolderId);
    setFolderName(clickedFolderName);
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
                      onClick={() => handleClick(folder.id, folder.name)}
                    >
                      {folder.name}
                    </FolderElement>
                  );
                })
              : null}
          </FolderList>
          <img src={add} alt="add-icon" />
        </FolderBox>
        <EditBox isVisible={folderId !== ""}>
          <div>{folderName}</div>
          <Edit>
            <div>
              <img src={share} alt="share-icon" />
              <span>공유</span>
            </div>
            <div>
              <img src={pen} alt="edit-icon" />
              <span>수정</span>
            </div>
            <div>
              <img src={trashcan} alt="delete-icon" />
              <span>삭제</span>
            </div>
          </Edit>
        </EditBox>
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
