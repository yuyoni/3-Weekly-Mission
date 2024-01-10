import { useState } from "react";
import styled from "styled-components";
import useFetchData from "../../hooks/useFetchData";
import convertKeyToCamelCase from "../../utils/convertKeyToCamelCase";
import Card from "../card/Card";
import SearchBar from "../searchbar/SearchBar";
import EditBox from "./EditBox";
import FolderBox from "./FolderBox";

export default function Content() {
  const [folderId, setFolderId] = useState("");
  const [folderName, setFolderName] = useState("전체");
  const linkData = useFetchData(`users/1/links?folderId=${folderId}`)?.data;

  return (
    <Main>
      <SearchBar />
      <FolderBox
        folderId={folderId}
        setFolderId={setFolderId}
        setFolderName={setFolderName}
      />
      <EditBox folderId={folderId} folderName={folderName} />
      <Wrapper>
        {linkData
          ? linkData.map((link) => {
              const newLink = convertKeyToCamelCase(link);
              return <Card key={newLink.id} link={newLink} />;
            })
          : null}
      </Wrapper>
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
  }
`;

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
