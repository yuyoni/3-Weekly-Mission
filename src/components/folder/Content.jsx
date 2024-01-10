import { useState } from "react";
import styled from "styled-components";
import add from "../../assets/white-add.svg";
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
      <Button>
        추가하기
        <img src={add} alt="add-icon" />
      </Button>
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

const Button = styled.div`
  display: none;

  @media (max-width: 767px) {
    position: fixed;
    bottom: 101px;
    width: 135px;
    height: 36px;
    border-radius: 20px;
    border: 1px solid #fff;
    background: #6d6afe;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    font-size: 16px;
    color: #e7effb;
  }
`;
