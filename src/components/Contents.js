import Cards from "./Cards";
import "./Contents.css";

function SearchBar() {
  return <input className="search-bar" placeholder="🔍 링크를 검색해 보세요" />;
}

function Contents({ folderData }) {
  return (
    <div className="main">
      <SearchBar />
      <Cards folderData={folderData} />
    </div>
  );
}

export default Contents;
