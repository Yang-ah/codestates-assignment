import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ margin: "52px" }}>
      <header style={{ fontSize: "32px" }}>헤더헤더헤더</header>
      <Outlet />
    </div>
  );
};

export default Layout;
