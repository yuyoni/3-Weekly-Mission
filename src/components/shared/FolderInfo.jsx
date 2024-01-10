import styled from "styled-components";
import UserInfo from "./Userinfo";

export default function FolderInfo({ folderData }) {
  return (
    <Wrapper>
      <div>
        <UserInfo folderOwner={folderData?.owner} />
        <span>{folderData?.name}</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px;
  width: 100%;
  background-color: #f0f6ff;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  & span {
    font-size: 40px;
    font-weight: 600;
  }
`;
