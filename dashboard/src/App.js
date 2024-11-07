import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Dashboard";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";

const Mycontext = createContext();

function App() {
  const [isSidebar, setisSidebar] = useState(false);
  const values = {
    isSidebar,
    setisSidebar,
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        <Header />
        <div className="main d-flex">
          <div
            className={`sidebarWrapper ${isSidebar === true ? "toggle" : ""}`}
          >
            <SideBar />
          </div>
          <div className={`content ${isSidebar === true ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { Mycontext };
