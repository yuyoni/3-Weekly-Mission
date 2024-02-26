import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetchData from "../../../hooks/useFetchData";
import SearchBar from "../searchbar/SearchBar";
import Content from "./Content";

export default function FolderLinkContainer({ userId, folderData }) {
  const [folderId, setFolderId] = useState("");
  const [inputText, setInputText] = useState("");

  const linkList = useFetchData(`users/${userId}/links?folderId=${folderId}`);
  const userInfo = useFetchData(`users/${userId}`);

  return (
    <Main>
      <SearchBar inputText={inputText} setInputText={setInputText} />
      {linkList ? (
        <Content
          userId={userId}
          folderId={folderId}
          setFolderId={setFolderId}
          linkList={linkList.data}
          folderData={folderData}
          inputText={inputText}
        />
      ) : (
        <p>저장된 링크가 없습니다</p>
      )}
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1060px;
  align-items: center;
  justify-content: center;
  margin: 40px auto 100px;
  gap: 24px;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
    margin: 20px auto 40px;
    gap: 20px;
  }
`;
