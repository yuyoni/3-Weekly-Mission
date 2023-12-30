import Cards from "./Cards";
import search from "../assets/Search.svg";
import "./Contents.css";

function SearchBar() {
  return (
    <div className="search-bar-box">
      <img src={search} alt="search-icon" />
      <input className="search-bar" placeholder=" 링크를 검색해 보세요" />
    </div>
  );
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
