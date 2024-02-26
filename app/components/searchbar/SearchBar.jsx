import styled from "styled-components";
import search from "../../../public/assets/Search.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    setText("");
  };

  useEffect(() => {
    // 현재 폴더의 링크 카드 중 “url”, “title”, “description”에 text가 들어가는 카드만 포함된 링크들만 필터링하는 기능
  }, [text]);

  return (
    <Wrapper>
      <Image src={search} alt="search-icon" />
      <input
        value={text}
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
