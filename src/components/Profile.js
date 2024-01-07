import { useEffect, useState } from "react";
import fetchData from "../apis/api";

function Profile() {
  const [userData, setUserData] = useState("");

  const handleLoad = async () => {
    const user = await fetchData("sample/user");
    setUserData(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
