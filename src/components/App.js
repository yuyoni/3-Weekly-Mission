import "../css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navigator from "./Navigator";
import Shared from "../routes/Shared";
import Home from "../routes/Home";
import Folder from "../routes/Folder";
import SignIn from "../routes/SignIn";
import SignUp from "../routes/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
