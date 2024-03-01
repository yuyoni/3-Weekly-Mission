import { useState } from "react";
import styled from "styled-components";
import handleClickOutside from "../../_utils/handleClickOutside";
import CommonModal from "../modal/CommonModal";

export default function SelectMenu({ setIsKebabClicked, folderData, linkUrl }) {
  const [deleteLinkModal, setDeleteLinkModal] = useState(false);
  const [addLinkModal, setAddLinkModal] = useState(false);

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setDeleteLinkModal(true);
  };

  const handleAddLinkClick = (e) => {
    e.stopPropagation();
    setAddLinkModal(true);
  };

  return (
    <Wrapper onClick={(e) => handleClickOutside(e, setIsKebabClicked)}>
      <Container>
        <div onClick={handleDeleteClick}>삭제하기</div>
        <div onClick={handleAddLinkClick}>폴더에 추가</div>
      </Container>
      {deleteLinkModal ? (
        <CommonModal
          setter={setDeleteLinkModal}
          title="링크 삭제"
          subtitle={linkUrl}
          buttonText="삭제하기"
          color="#FF5B56"
        />
      ) : null}
      {addLinkModal ? (
        <CommonModal
          setter={setAddLinkModal}
          title="폴더에 추가"
          subtitle={linkUrl}
          buttonText="추가하기"
          folderData={folderData}
          color="linear-gradient"
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div`
  position: absolute;
  top: 230px;
  left: 300px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 1;
  div {
    display: flex;
    padding: 7px 12px;
    justify-content: center;
    align-items: flex-start;
    width: 100px;
    background-color: white;

    &:hover {
      background-color: #e7effb;
      color: #6d6afe;
    }
  }
`;
