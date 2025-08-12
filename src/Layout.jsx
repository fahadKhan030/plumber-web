import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import ScrollToTop from "./ScrollToTop/ScrollToTop.jsx";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
