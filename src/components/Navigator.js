import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import profileIcon from "../assets/profile.svg";
import "./Navigator.css";
import { fetchUserData } from "./api";

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
          <img className="profile-icon" src={profileIcon} alt="profile-icon" />
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
    <div className="navigator">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <Profile />
    </div>
  );
}

export default Navigator;
