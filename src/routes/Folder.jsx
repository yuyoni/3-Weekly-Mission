import styled from "styled-components";
import AddLink from "../components/folder/AddLink";
import FolderLinkContainer from "../components/folder/FolderLinkContainer";

export default function Folder() {
  return (
    <Wrapper className="folder">
      <AddLink />
      <FolderLinkContainer />
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
