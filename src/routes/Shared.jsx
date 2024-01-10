import styled from "styled-components";
import useFetchData from "../hooks/useFetchData";
import FolderInfo from "../components/FolderInfo";
import Contents from "../components/Contents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

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
