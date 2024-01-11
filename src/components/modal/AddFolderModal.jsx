import styled from "styled-components";
import close from "../../assets/_close.svg";

export default function AddFolerModal({ setModal }) {
  return (
    <Wrapper>
      <Container>
        <img
          src={close}
          alt="x"
          onClick={() => {
            setModal(false);
          }}
        />
        <span>폴더 추가</span>
        <input type="text" placeholder="내용 입력" />
        <button>추가하기</button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 40px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;

  span {
    font-weight: 600;
    font-size: 20px;
    color: #373740;
    margin-bottom: 24px;
  }
  input {
    display: flex;
    width: 280px;
    padding: 18px 15px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #ccd5e3;
    background: #fff;
    margin-bottom: 15px;
  }
  button {
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
  img {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`;
