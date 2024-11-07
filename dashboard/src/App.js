import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Dashboard";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";

const Mycontext = createContext();

function App() {
  const [isSidebar, setisSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const values = {
    isLogin,
    setIsLogin,
    isSidebar,
    setisSidebar,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader,
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {isHideSidebarAndHeader !== true && <Header />}

        <div className="main d-flex">
          {isHideSidebarAndHeader !== true && (
            <div
              className={`sidebarWrapper ${isSidebar === true ? "toggle" : ""}`}
            >
              <SideBar />
            </div>
          )}

          <div
            className={`content ${isHideSidebarAndHeader === true && "full"} ${
              isSidebar === true ? "toggle" : ""
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { Mycontext };
