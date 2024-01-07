import useFetchData from "../hooks/useFetchData";

function Profile() {
  const userData = useFetchData("sample/user");

  return (
    <div className="user-account">
      {userData ? (
        <>
          <img
            className="profile-icon"
            src={userData.profileImageSource}
            alt="profile-icon"
          />
          <span className="user-email">{userData.email}</span>
        </>
      ) : (
        <a className="cta" href="/signin">
          로그인
        </a>
      )}
    </div>
  );
}

export default Profile;
