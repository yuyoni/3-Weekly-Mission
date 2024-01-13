import { useState } from "react";
import styled from "styled-components";
import add from "../../assets/white-add.svg";
import useFetchData from "../../hooks/useFetchData";
import convertKeyToCamelCase from "../../utils/convertKeyToCamelCase";
import Card from "../card/Card";
import EditBox from "./EditBox";
import FolderBox from "./FolderBox";

export default function Content({ userId, folderId, setFolderId, linkList }) {
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const folderData = useFetchData(`users/${userId}/folders`)?.data;

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
          return (
            <Card key={newLink.id} folderData={folderData} link={newLink} />
          );
        })}
      </Wrapper>
      <Button>
        추가하기
        <img src={add} alt="add-icon" />
      </Button>
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

const Button = styled.div`
  display: none;
  cursor: pointer;
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
