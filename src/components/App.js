import { useEffect, useState } from "react";
import { fetchFolderData } from "../api/api";
import "../css/App.css";
import Contents from "./Contents";
import FolderInfo from "./FolderInfo";
import Footer from "./Footer";
import Navigator from "./Navigator";

function App() {
  const [folderData, setFolderData] = useState(null);

  const handleLoad = async () => {
    const user = await fetchFolderData();
    setFolderData(user);
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
