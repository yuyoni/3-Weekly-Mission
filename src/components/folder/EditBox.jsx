import styled from "styled-components";
import pen from "../../assets/pen.svg";
import share from "../../assets/share.svg";
import trashcan from "../../assets/trashcan.svg";
import { useState } from "react";
import CommonModal from "../modal/CommonModal";

export default function EditBox({ userId, folderId, currentFolderName }) {
  const [editFolderModal, setEditFolderModal] = useState(false);
  const [shareFolderModal, setShareFolderModal] = useState(false);
  const [deleteFolderModal, setDeleteFolderModal] = useState(false);

  return (
    <Wrapper>
      <div>{currentFolderName}</div>
      <Edit $isVisible={folderId !== ""}>
        <div onClick={() => setShareFolderModal(true)}>
          <img src={share} alt="share-icon" />
          <span>공유</span>
        </div>
        <div onClick={() => setEditFolderModal(true)}>
          <img src={pen} alt="edit-icon" />
          <span>수정</span>
        </div>
        <div onClick={() => setDeleteFolderModal(true)}>
          <img src={trashcan} alt="delete-icon" />
          <span>삭제</span>
        </div>
      </Edit>
      {editFolderModal ? (
        <CommonModal
          setter={setEditFolderModal}
          title="폴더 이름 변경"
          placeholder={currentFolderName}
          buttonText="변경하기"
          color="linear-gradient"
        />
      ) : null}
      {shareFolderModal ? (
        <CommonModal
          setter={setShareFolderModal}
          title="폴더 공유"
          subtitle={currentFolderName}
          icon="true"
          folderId={folderId}
          userId={userId}
        />
      ) : null}
      {deleteFolderModal ? (
        <CommonModal
          setter={setDeleteFolderModal}
          title="폴더 삭제"
          subtitle={currentFolderName}
          buttonText="삭제하기"
          color="#FF5B56"
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  margin: 24px auto;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
    margin: 0;
  }
`;

const Edit = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  gap: 12px;
  justify-content: left;

  & span {
    font-size: 14px;
    color: #9fa6b2;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
  }
`;
