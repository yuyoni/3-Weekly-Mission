import { useEffect, useState } from "react";
import styled from "styled-components";
import AddLink from "../components/folder/AddLink";
import FolderLinkContainer from "../components/folder/FolderLinkContainer";
import useFetchData from "../hooks/useFetchData";

export default function Folder() {
  // 유저 아이디 (임시로 1로 초기화. 폴더 리스트, 유저정보, 링크리스트 불러올 때 필요함)
  const [userId, setUserId] = useState("1");

  // userId에 해당하는 유저의 폴더 정보
  const folderData = useFetchData(`users/${userId}/folders`)?.data;

  // eslint에서 선언되고 사용안됐다고 배포안해줘서 임시로 사용하는 코드 씀..
  useEffect(() => {
    setUserId("1");
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
