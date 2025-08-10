import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
