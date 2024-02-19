import styled from "styled-components";
import search from "../../../public/assets/Search.svg";
import Image from "next/image";

export default function SearchBar() {
  return (
    <Wrapper>
      <Image src={search} alt="search-icon" />
      <input placeholder=" 링크를 검색해 보세요" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 16px;
  border-radius: 10px;
  background: #f5f5f5;
  gap: 10px;
  margin-bottom: 16px;

  & input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
  }
`;
