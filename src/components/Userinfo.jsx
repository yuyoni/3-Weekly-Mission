import avatar from "../assets/avatar.svg";

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

export default UserInfo;
