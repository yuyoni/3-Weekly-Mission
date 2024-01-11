import { useState } from "react";
import styled from "styled-components";
import useFetchData from "../../hooks/useFetchData";
import SearchBar from "../searchbar/SearchBar";
import FolderData from "./\bFolderData";

export default function Content() {
  const [folderId, setFolderId] = useState("");
  const linkData = useFetchData(`users/1/links?folderId=${folderId}`)?.data;

  return (
    <Main>
      <SearchBar />
      {linkData ? (
        <FolderData
          folderId={folderId}
          setFolderId={setFolderId}
          linkData={linkData}
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
  gap: 40px;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
    margin: 20px auto 40px;
    gap: 20px;
  }
`;
