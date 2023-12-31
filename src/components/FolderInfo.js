import "../css/FolderInfo.css";
import UserInfo from "./Userinfo";

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
