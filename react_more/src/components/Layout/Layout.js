import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isMainPage = location.pathname === "/main";

  return (
    <section style={{ padding: "20px" }}>
      <header>
        <h1>일반 Layout</h1>
      </header>
      <Outlet />
    </section>
  );
};

export default Layout;
