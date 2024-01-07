import styled from "styled-components";
import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import useFetchData from "../hooks/useFetchData";
import Card from "../components/Card";
import convertKeyToCamelCase from "../utils/convertKeyToCamelCase";
import add from "../assets/add.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FolderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FolderList = styled.div`
  display: flex;
  gap: 8px;
`;
const FolderElement = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;
`;

export default function Shared() {
  const folderData = useFetchData("users/1/folders")?.data;
  const linkData = useFetchData("users/1/links")?.data;

  console.log(folderData);
  return (
    <Container className="Folder">
      <AddLink />
      <main>
        <SearchBar />
        <FolderBox>
          <FolderList>
            {folderData
              ? folderData.map((folder) => {
                  return <FolderElement>{folder.name}</FolderElement>;
                })
              : null}
          </FolderList>
          <img src={add} alt="add" />
        </FolderBox>
        <div className="cards">
          {linkData
            ? linkData.map((link) => {
                const newLink = convertKeyToCamelCase(link);
                return <Card key={newLink.id} link={newLink} />;
              })
            : null}
        </div>
      </main>
    </Container>
  );
}
