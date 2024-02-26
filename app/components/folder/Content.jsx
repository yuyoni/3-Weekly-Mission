import { useState } from "react";
import styled from "styled-components";
import convertKeyToCamelCase from "../../../utils/convertKeyToCamelCase";
import Card from "../card/Card";
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

          // 검색어가 포함된 경우에만 렌더링
          if (
            inputText &&
            (title?.includes(searchText) ||
              description?.includes(searchText) ||
              url?.includes(searchText))
          ) {
            return (
              <Card key={newLink.id} folderData={folderData} link={newLink} />
            );
          }
          // 입력된 텍스트가 없는 경우 모든 newLink를 렌더링
          else if (!inputText) {
            return (
              <Card key={newLink.id} folderData={folderData} link={newLink} />
            );
          }
          return null; // 나머지 경우는 렌더링하지 않음
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
