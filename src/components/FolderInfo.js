import avatar from "../assets/avatar.svg";
import "../css/FolderInfo.css";

function UserInfo({ folderOwner }) {
  return (
    <div className="profile-box">
      <img
        className="user-image"
        src={folderOwner ? folderOwner.profileImageSource : avatar}
        alt="avatar"
      />
      <span className="user-name">@{folderOwner?.name}</span>
    </div>
  );
}

function FolderInfo({ folderData }) {
  return (
    <div className="folder-container">
      <div className="folder-info">
        <UserInfo folderOwner={folderData?.owner} />
        <span className="folder-name">{folderData?.name}</span>
      </div>
    </div>
  );
}

export default FolderInfo;
