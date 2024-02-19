import { useState } from "react";
import styled from "styled-components";
import useFetchData from "../../../hooks/useFetchData";
import SearchBar from "../searchbar/SearchBar";
import Content from "./Content";

export default function FolderLinkContainer({ userId, folderData }) {
  // 폴더 아이디 (아무값도 없으면 전체 폴더. 폴더 선택할 떄 필요함)
  const [folderId, setFolderId] = useState("");

  // 링크 리스트 (유저아이디와 폴더 아이디를 이용해서 특정유저의 특정 폴더안에 있는 링크들을 불러올 수 있음)
  const linkList = useFetchData(`users/${userId}/links?folderId=${folderId}`);

  // 유저 정보 (유저id로 해당 유저의 이름, 프로필이미지, 생성일 등 정보를 알 수 있음)
  const userInfo = useFetchData(`users/${userId}`);

  // eslint에서 선언되고 사용안됐다고 배포안해줘서 임시로 사용하는 코드 씀..
  console.log(userInfo);

  return (
    <Main>
      <SearchBar />
      {linkList ? (
        <Content
          userId={userId}
          folderId={folderId}
          setFolderId={setFolderId}
          linkList={linkList.data}
          folderData={folderData}
        />
      ) : (
        <p>저장된 링크가 없습니다</p>
      )}
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1060px;
  align-items: center;
  justify-content: center;
  margin: 40px auto 100px;
  gap: 24px;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
    margin: 20px auto 40px;
    gap: 20px;
  }
`;
