import styled from "styled-components";
import SearchBar from "../searchbar/SearchBar";
import Content from "./Content";
import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";

export default function FolderLinkContainer() {
  // 폴더 아이디 (아무값도 없으면 전체 폴더. 폴더 선택할 떄 필요함)
  const [folderId, setFolderId] = useState("");

  // 유저 아이디 (임시로 1로 초기화. 폴더 리스트, 유저정보, 링크리스트 불러올 때 필요함)
  const [userId, setUserId] = useState("1");

  // 링크 리스트 (유저아이디와 폴더 아이디를 이용해서 특정유저의 특정 폴더안에 있는 링크들을 불러올 수 있음)
  const linkList = useFetchData(`users/${userId}/links?folderId=${folderId}`);

  // 유저 정보 (유저id로 해당 유저의 이름, 프로필이미지, 생성일 등 정보를 알 수 있음)
  const userInfo = useFetchData(`users/${userId}`);

  return (
    <Main>
      <SearchBar />
      {linkList ? (
        <Content
          userId={userId}
          folderId={folderId}
          setFolderId={setFolderId}
          linkList={linkList.data}
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
  gap: 40px;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
    margin: 20px auto 40px;
    gap: 20px;
  }
`;
