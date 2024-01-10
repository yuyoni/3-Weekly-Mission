import styled from "styled-components";
import useFetchData from "../../hooks/useFetchData";
import convertKeyToCamelCase from "../../utils/convertKeyToCamelCase";

export default function Profile() {
  const userData = useFetchData("users/1")?.data;
  const userInfo = userData ? convertKeyToCamelCase(userData[0]) : null;

  return (
    <Wrapper>
      {userData ? (
        <>
          <img
            className="profile-icon"
            src={userInfo.imageSource}
            alt="profile-icon"
          />
          <span className="user-email">{userInfo.email}</span>
        </>
      ) : (
        <a className="cta" href="/signin">
          로그인
        </a>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .profile-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .user-email {
    color: #373740;
    font-size: 14px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  .cta {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    width: 128px;
    cursor: pointer;
    background-image: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    border-radius: 8px;
    color: #f5f5f5;
    font-size: 18px;
  }
`;
