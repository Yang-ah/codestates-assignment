import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
