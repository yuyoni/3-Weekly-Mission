import Navigator from "./Navigator";
import FolderInfo from "./FolderInfo";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Contents from "./Contents";
import { fetchFolderData } from "./api";
import "./App.css";

function App() {
  const [folderData, setFolderData] = useState("");

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
        <FolderInfo folderData={folderData} />
        <Contents folderData={folderData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
