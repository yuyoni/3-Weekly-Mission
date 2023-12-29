import avatar from "../assets/avatar.svg";
import "./FolderInfo.css";

function UserInfo() {
  return (
    <div className="profile-box">
      <img className="user-image" src={avatar} alt="avatar" />
      <span className="user-name">@코드잇</span>
    </div>
  );
}

function FolderInfo() {
  return (
    <div className="folder-container">
      <div className="folder-info">
        <UserInfo />
        <span className="folder-name">⭐️ 즐겨찾기</span>
      </div>
    </div>
  );
}

export default FolderInfo;
