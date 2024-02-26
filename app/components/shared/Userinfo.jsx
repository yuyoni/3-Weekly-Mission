import styled from "styled-components";
import avatar from "../../../public/assets/avatar.svg";

export default function UserInfo({ folderOwner }) {
  return (
    <Wrapper>
      <img
        className="user-image"
        src={folderOwner ? folderOwner.profileImageSource : avatar}
        alt="avatar"
      />
      <span className="user-name">@{folderOwner?.name}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & img {
    width: 60px;
    height: 60px;
  }
`;
