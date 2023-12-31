import { useEffect, useState } from "react";
import { fetchUserData } from "../api/api";
import logo from "../assets/logo.svg";
import "../css/Navigator.css";

function Profile() {
  const [userData, setUserData] = useState("");

  const handleLoad = async () => {
    const user = await fetchUserData();
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

function Navigator() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <Profile />
      </nav>
    </header>
  );
}

export default Navigator;
