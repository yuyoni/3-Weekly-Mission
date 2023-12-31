import "../css/Contents.css";
import Cards from "./Cards";
import SearchBar from "./SearchBar";

function Contents({ folderData }) {
  return (
    <main>
      <SearchBar />
      <Cards folderData={folderData} />
    </main>
  );
}

export default Contents;
