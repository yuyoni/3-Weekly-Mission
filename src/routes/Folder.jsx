import styled from "styled-components";
import AddLink from "../components/folder/AddLink";
import Content from "../components/folder/Content";
import { useState } from "react";
import useFetchData from "../hooks/useFetchData";

export default function Folder() {
  const [folderId, setFolderId] = useState("");
  const linkData = useFetchData(`users/1/links?folderId=${folderId}`)?.data;

  return (
    <Wrapper className="folder">
      <AddLink />
      <Content
        folderId={folderId}
        setFolderId={setFolderId}
        linkData={linkData}
      />
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
