import styled from "styled-components";
import AddLink from "../components/folder/AddLink";
import Content from "../components/folder/Content";

export default function Folder() {
  return (
    <Wrapper className="folder">
      <AddLink />

      <Content />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
