import { styled } from "styled-components";
import link from "../../../public/assets/link.svg";
import { useState } from "react";
import CommonModal from "../modal/CommonModal";
import Image from "next/image";

export default function AddLink({ folderData }) {
  const [inputValue, setInputValue] = useState("");
  const [addLinkModal, setAddLinkModal] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddLinkClick = (e, inputValue) => {
    e.stopPropagation();
    if (inputValue.trim().length) {
      setAddLinkModal(true);
    } else {
      alert("링크를 입력해 주세요.");
    }
  };

  return (
    <Wrapper>
      <Container className="add-link-box">
        <Image src={link} alt="add-link-icon" />
        <Input
          className="add-link"
          placeholder=" 링크를 추가해 보세요"
          onChange={handleInputChange}
        />
        <button
          className="cta"
          onClick={(e) => {
            handleAddLinkClick(e, inputValue);
          }}
        >
          추가하기
        </button>
      </Container>
      {addLinkModal ? (
        <CommonModal
          setter={setAddLinkModal}
          title="폴더에 추가"
          subtitle={inputValue}
          buttonText="추가하기"
          folderData={folderData}
          color="linear-gradient"
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f0f6ff;
`;

const Container = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
  padding: 16px 20px;
  margin: 60px 200px 90px;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background: white;

  @media (max-width: 1124px) {
    width: 100%;
    margin: 60px 32px 90px;
  }
  @media (max-width: 767px) {
    margin: 24px 32px 40px;
    padding: 8px 10px;
  }

  .cta {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    padding: 10px 16px;
    background-image: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    border-radius: 8px;
    color: #f5f5f5;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
`;
