import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main style={{ margin: "52px" }}>
      <header style={{ fontSize: "32px" }}>헤더헤더헤더</header>
      <Outlet />
    </main>
  );
};

export default Layout;
