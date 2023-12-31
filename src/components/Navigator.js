import logo from "../assets/logo.svg";
import "../css/Navigator.css";
import Profile from "./Profile";

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
