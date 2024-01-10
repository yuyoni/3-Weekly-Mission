import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Profile from "./Profile";

export default function Navigator() {
  return (
    <Wrapper>
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
  top: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
  padding: 32px 200px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
