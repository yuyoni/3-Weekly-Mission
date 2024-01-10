import styled from "styled-components";
import pen from "../../assets/pen.svg";
import share from "../../assets/share.svg";
import trashcan from "../../assets/trashcan.svg";

export default function EditBox({ folderId, folderName = "전체" }) {
  return (
    <Wrapper>
      <div>{folderName}</div>
      <Edit $isVisible={folderId !== ""}>
        <div>
          <img src={share} alt="share-icon" />
          <span>공유</span>
        </div>
        <div>
          <img src={pen} alt="edit-icon" />
          <span>수정</span>
        </div>
        <div>
          <img src={trashcan} alt="delete-icon" />
          <span>삭제</span>
        </div>
      </Edit>
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
`;

const Edit = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  gap: 12px;
  & span {
    font-size: 14px;
    color: #9fa6b2;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  justify-content: space-between;
`;
