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
  flex-direction: column;
  width: 1060px;
  align-items: center;
  justify-content: center;
  margin: 40px auto 100px;
  gap: 40px;

  @media (max-width: 1124px) {
    width: 704px;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    width: 325px;
    grid-template-columns: 1fr;
    margin: 20px 32px 60px;
  }
`;
