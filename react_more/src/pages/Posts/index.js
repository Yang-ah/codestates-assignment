import React from "react";
import { useNavigate } from "react-router-dom";

const arr = [
  { id: 1, title: "제목1" },
  { id: 2, title: "제목2" },
  { id: 3, title: "제목3" },
  { id: 4, title: "제목4" },
  { id: 5, title: "제목5" },
  { id: 6, title: "제목6" },
  { id: 7, title: "제목7" },
  { id: 8, title: "제목8" },
];

const Posts = () => {
  const navigate = useNavigate();

  const onClickItem = (id) => {
    return () => {
      navigate(`/posts/${id}`);
    };
  };

  return (
    <section style={{ padding: "20px" }}>
      <h1>Posts Page</h1>
      <ul>
        {arr.map((item) => (
          <li onClick={onClickItem(item.id)}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Posts;
