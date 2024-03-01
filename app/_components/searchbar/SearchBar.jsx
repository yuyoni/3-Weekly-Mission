import Image from "next/image";
import styled from "styled-components";
import search from "../../../public/assets/Search.svg";

export default function SearchBar({ inputText, setInputText }) {
  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const onClickButton = () => {
    setInputText("");
  };

  return (
    <Wrapper>
      <Image src={search} alt="search-icon" />
      <input
        value={inputText}
        onChange={onChangeInput}
        placeholder=" 링크를 검색해 보세요"
      />
      <button onClick={onClickButton}>x</button>
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
