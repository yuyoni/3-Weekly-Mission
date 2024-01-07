import "../css/App.css";
import Contents from "./Contents";
import FolderInfo from "./FolderInfo";
import Footer from "./Footer";
import Navigator from "./Navigator";
import useFetchData from "../hooks/useFetchData";

function App() {
  const folderData = useFetchData("sample/folder");

  return (
    <div className="App">
      <Navigator />
      <div className="Wrapper">
        <FolderInfo folderData={folderData?.folder} />
        <Contents folderData={folderData?.folder} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
