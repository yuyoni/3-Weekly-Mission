import { useState } from "react";
import styled from "styled-components";
import Card from "../../../_components/card/Card";
import convertKeyToCamelCase from "../../../_utils/convertKeyToCamelCase";
import EditBox from "./EditBox";
import FolderBox from "./FolderBox";

export default function Content({
  userId,
  folderId,
  setFolderId,
  linkList,
  folderData,
  inputText,
}) {
  const [currentFolderName, setCurrentFolderName] = useState("전체");

  return (
    <>
      <FolderBox
        folderData={folderData}
        userId={userId}
        folderId={folderId}
        setFolderId={setFolderId}
        setCurrentFolderName={setCurrentFolderName}
      />
      <EditBox
        userId={userId}
        folderId={folderId}
        currentFolderName={currentFolderName}
      />
      <Wrapper>
        {linkList.map((link) => {
          const newLink = convertKeyToCamelCase(link);
          const searchText = inputText.toLowerCase();
          const { title, description, url } = newLink;

          if (
            inputText &&
            (title?.includes(searchText) ||
              description?.includes(searchText) ||
              url?.includes(searchText))
          ) {
            return (
              <Card key={newLink.id} folderData={folderData} link={newLink} />
            );
          } else if (!inputText) {
            return (
              <Card key={newLink.id} folderData={folderData} link={newLink} />
            );
          }
          return null;
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1060px;
  row-gap: 25px;
  column-gap: 20px;

  @media (max-width: 1124px) {
    width: 704px;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    width: 325px;
    grid-template-columns: 1fr;
    margin: 20px 32px 60px;
  }
`;
