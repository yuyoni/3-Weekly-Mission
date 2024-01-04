import search from "../assets/Search.svg";

function SearchBar() {
  return (
    <div className="search-bar-box">
      <img src={search} alt="search-icon" />
      <input className="search-bar" placeholder=" 링크를 검색해 보세요" />
    </div>
  );
}

export default SearchBar;
