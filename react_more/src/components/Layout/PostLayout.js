import React from "react";
import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <section style={{ padding: "20px" }}>
      <header>
        <h1>PostLayout</h1>
        <div>메뉴</div>
      </header>
      {/* index 경로로 오면 Outlet에 PostsPage가 렌더 */}
      {/* /:postId 경로로 오면 Outlet에 PostDetailPage가 렌더 */}
      <Outlet />
    </section>
  );
};

export default PostLayout;
