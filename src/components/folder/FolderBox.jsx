import styled from "styled-components";
import add from "../../assets/add.svg";
import useFetchData from "../../hooks/useFetchData";
import { useState } from "react";
import CommonModal from "../modal/CommonModal";

export default function FolderBox({
  folderData,
  userId,
  folderId,
  setFolderId,
  setCurrentFolderName,
}) {
  const [addFolderModal, setAddFolderModal] = useState(false);

  const handleClickFolder = (clickedFolderId, clickedFolderName) => {
    setFolderId(clickedFolderId);
    setCurrentFolderName(clickedFolderName);
  };

  return (
    <Wrapper>
      <FolderList>
        <FolderElement
          $isSelected={folderId === ""}
          onClick={() => handleClickFolder("")}
        >
          전체
        </FolderElement>
        {folderData
          ? folderData.map(({ id, name }) => (
              <FolderElement
                key={id}
                $isSelected={folderId === id}
                onClick={() => handleClickFolder(id, name)}
              >
                {name}
              </FolderElement>
            ))
          : null}
      </FolderList>
      <FolderAdd>
        <span
          onClick={() => {
            setAddFolderModal(true);
          }}
        >
          폴더 추가
        </span>
        <img src={add} alt="add-icon" />
      </FolderAdd>

      {addFolderModal ? (
        <CommonModal
          setter={setAddFolderModal}
          title="폴더 추가"
          placeholder="폴더명"
          buttonText="추가하기"
          color="linear-gradient"
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FolderList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const FolderElement = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;

  align-items: center;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${({ $isSelected }) => ($isSelected ? "#6d6afe" : "#fff")};
  color: ${({ $isSelected }) => ($isSelected ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "#6d6afe" : "#e7effb"};
  }
`;

const FolderAdd = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  span {
    font-size: 16px;
    color: #6d6afe;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
