import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./sidebar.module.css";

const Sidebar = () => {
  //MEMO: 경로를 이동할 때 사용
  const navigate = useNavigate();

  const onClick = (path) => {
    return () => {
      navigate(path);
    };
  };
  return (
    <section className={styles.sidebar}>
      <i className={"far fa-comment-dots"} onClick={onClick("/")}></i>
      <i className={"far fa-question-circle"} onClick={onClick("/about")}></i>
      <i className={"far fa-user"} onClick={onClick("/my")}></i>
    </section>
  );
};

export default Sidebar;
