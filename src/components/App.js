import Navigator from "./Navigator";
import FolderInfo from "./FolderInfo";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function App() {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const user = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      if (user.ok) {
        const result = await user.json();
        setFolderData(result);
      }
    }

    fetchData();
  }, []);

  if (folderData) console.log(folderData.folder);

  return (
    <div className="App">
      <Navigator />
      <FolderInfo folderData={folderData} />
      <Footer />
    </div>
  );
}

export default App;
