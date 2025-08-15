import React, { useEffect, useState } from "react";
import Header from "../navigation/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../navigation/Footer";

const Layout = () => {
  const [isHeader, setIsHeader] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/service/web-development" ||
      location.pathname === "/service/ai-development" ||
      location.pathname === "/about-us" ||
      location.pathname === "/case-study" ||
      location.pathname === "/blog" ||
      location.pathname === "privacy-policy" ||
      location.pathname === "privacy-policy"
    ) {
      setIsHeader(true);
    }
  }, []);

  return (
    <>
      {!isHeader && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
