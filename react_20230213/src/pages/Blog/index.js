import React from "react";

import styles from "./blog.module.css";
import Button from "./Button";

// MEMO: import "./blog.css" => 일반적인 그리고 가장 기본적인 css 사용법
// MEMO: import styles from './blog.module.css'; => css module 사용법

const Blog = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.wrapper}>Blog</h1>
      <Button />
    </section>
  );
};

export default Blog;
