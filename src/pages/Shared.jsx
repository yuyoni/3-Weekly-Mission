import styled from "styled-components";
import Contents from "../components/shared/Contents";
import FolderInfo from "../components/shared/FolderInfo";
import useFetchData from "../../hooks/useFetchData";

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
