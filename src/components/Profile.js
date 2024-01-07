import useFetchData from "../hooks/useFetchData";
import convertKeyToCamelCase from "../utils/convertKeyToCamelCase";

function Profile() {
  const userData = useFetchData("users/1")?.data;
  const userInfo = userData ? convertKeyToCamelCase(userData[0]) : null;

  return (
    <div className="user-account">
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
    </div>
  );
}

export default Profile;
