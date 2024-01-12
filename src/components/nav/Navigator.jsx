import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

export default function Navigator() {
  const location = useLocation();
  const isFolderPage = location.pathname.includes("folder");

  return (
    <Wrapper $isFolderPage={isFolderPage}>
      <Nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <Profile />
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  position: ${({ $isFolderPage }) => ($isFolderPage ? "relative" : "sticky")};
  top: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
  padding: 32px 200px;

  /* Mobile size */
  @media (max-width: 767px) {
    padding: 18px 32px;
  }

  /* Tablet size */
  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 32px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 800px;
  }
`;
