import { useState } from "react";
import styled from "styled-components";
import add from "../../assets/add.svg";
import whiteAdd from "../../assets/white-add.svg";
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
        <div
          className="folder-add-text"
          onClick={() => {
            setAddFolderModal(true);
          }}
        >
          <span>폴더 추가</span>
          <img src={add} alt="add-icon" />
        </div>

        <div
          className="folder-add-button"
          onClick={() => {
            setAddFolderModal(true);
          }}
        >
          추가하기
          <img src={whiteAdd} alt="add-icon" />
        </div>
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

  .folder-add-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 87px;
    gap: 4px;
    cursor: pointer;

    span {
      font-size: 16px;
      color: #6d6afe;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  .folder-add-button {
    display: none;
    cursor: pointer;
    z-index: 2;
    @media (max-width: 767px) {
      position: fixed;
      bottom: 101px;
      left: 32%;
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
  }
`;
