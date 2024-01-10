import { styled } from "styled-components";
import link from "../../assets/link.svg";

export default function AddLink() {
  return (
    <Wrapper>
      <Container className="add-link-box">
        <img src={link} alt="add-link-icon" />
        <Input className="add-link" placeholder=" 링크를 추가해 보세요" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px 320px 90px;
  background-color: #f0f6ff;
`;
const Container = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background: white;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`;
