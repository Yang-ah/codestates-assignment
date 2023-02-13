import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/blog/123");
  };

  return (
    <div style={{ margin: "40px" }}>
      <h1>Blog</h1>
      <button onClick={onClickButton}>디테일로 이동</button>
    </div>
  );
};

export default Blog;
