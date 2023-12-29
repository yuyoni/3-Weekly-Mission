import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import profileIcon from "../assets/profile.svg";
import "./Navigator.css";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const user = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/user"
      );
      if (user.ok) {
        const result = await user.json();
        setUserData(result);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="user-account">
      {userData ? (
        <>
          <img className="profile-icon" src={profileIcon} alt="profile-icon" />
          <span className="user-email">{userData.email}</span>
        </>
      ) : (
        <a href="/signin">로그인</a>
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
