"use client";
import styled from "styled-components";
import useFetchData from "../../_hooks/useFetchData";
import Contents from "./_components/Contents";
import FolderInfo from "./_components/FolderInfo";

export default function Shared() {
  const folderData = useFetchData("sample/folder");
  return (
    <Container className="Shared">
      {folderData ? (
        <>
          <FolderInfo folderData={folderData.folder} />
          <Contents folderData={folderData.folder} />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
