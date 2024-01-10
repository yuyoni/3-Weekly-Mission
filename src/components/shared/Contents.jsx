import styled from "styled-components";
import Cards from "../card/Cards";
import SearchBar from "../searchbar/SearchBar";

export default function Contents({ folderData }) {
  return (
    <Main>
      <SearchBar />
      <Cards folderData={folderData} />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  display: flex;
  width: 1060px;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 100px;
  gap: 40px;

  @media (max-width: 767px) {
    width: 325px;
    margin: 20px 32px 60px;
  }

  @media (max-width: 1124px) {
    width: 704px;
    margin: 40px 32px 100px;
  }
`;
