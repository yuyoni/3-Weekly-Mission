import avatar from "../assets/avatar.svg";
import "./FolderInfo.css";

function UserInfo({ folderData }) {
  return (
    <div className="profile-box">
      <img
        className="user-image"
        src={folderData ? folderData.folder.owner.profileImageSource : avatar}
        alt="avatar"
      />
      <span className="user-name">
        @{folderData ? folderData.folder.owner.name : null}
      </span>
    </div>
  );
}

function FolderInfo({ folderData }) {
  return (
    <div className="folder-container">
      <div className="folder-info">
        <UserInfo folderData={folderData ? folderData : null} />
        <span className="folder-name">
          {folderData ? folderData.folder.name : null}
        </span>
      </div>
    </div>
  );
}

export default FolderInfo;
