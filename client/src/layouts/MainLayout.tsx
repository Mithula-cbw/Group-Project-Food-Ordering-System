import React from "react";
// import Header from "../../Components/Header";
// import Footer from "../../Components/Footer";

type MainLayoutProps = {
  children : React.ReactNode;
};


const MainLayout : React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
