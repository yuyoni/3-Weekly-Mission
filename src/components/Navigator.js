import logo from "../assets/logo.svg";
import profileIcon from "../assets/profile.svg";
import "./Navigator.css";

function Profile() {
  return (
    <div className="user-account">
      {/* 프로필 영역 데이터 있으면 프로필 및 이메일, 프로필 데이터가 없는 경우 “로그인” 버튼이 보이도록 수정하기*/}
      <img className="profile-icon" src={profileIcon} alt="profile-icon" />
      <span className="user-email">Codeit@codeit.com</span>
    </div>
  );
}

function Navigator() {
  return (
    <div className="navigator">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <Profile />
    </div>
  );
}

export default Navigator;
