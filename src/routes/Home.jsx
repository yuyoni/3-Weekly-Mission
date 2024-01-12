import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>home</h1>
      <Button
        onClick={() => {
          navigate("/shared");
        }}
      >
        shared
      </Button>
      <Button
        onClick={() => {
          navigate("/folder");
        }}
      >
        folder
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Button = styled.button`
  width: 100px;
  display: block;
  border-radius: 20px;
  border: 1px solid #fff;
  background: #6d6afe;
  color: #fff;
`;
