"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetchData from "../../_hooks/useFetchData";
import AddLink from "./_components/AddLink";
import FolderLinkContainer from "./_components/FolderLinkContainer";

export default function Folder() {
  const [userId, setUserId] = useState("4");
  const folderData = useFetchData(`users/${userId}/folders`)?.data;

  // eslint에서 선언되고 사용안됐다고 배포안해줘서 임시로 사용하는 코드 씀..
  useEffect(() => {
    setUserId("4");
  }, [userId]);

  return (
    <Wrapper className="folder">
      <AddLink folderData={folderData} />
      <FolderLinkContainer userId={userId} folderData={folderData} />
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
