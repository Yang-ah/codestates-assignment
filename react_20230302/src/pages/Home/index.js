import React from "react";

import styles from "./home.module.scss";

const Home = () => {
  //MEMO: localStorage 저장 방법
  localStorage.setItem("example~", "example~");
  localStorage.setItem("example~2", JSON.stringify({ example: "example" }));

  //MEMO: localStorage 불러오기
  const example1 = localStorage.getItem("example~");
  const example2 = localStorage.getItem("example~2");
  console.log({ example1, example2: JSON.parse(example2) });
  return (
    <div class={styles.wrapper}>
      <div class={styles.item}>A</div>
      <div class={styles.item}>B</div>
      <div class={styles.item}>C</div>
      <div class={styles.item}>D</div>
      <div class={styles.item}>E</div>
      <div class={styles.item}>F</div>
      <div class={styles.item}>G</div>
      <div class={styles.item}>H</div>
      <div class={styles.item}>I</div>
      <div class={styles.customItem}>Z</div>
    </div>
  );
};

export default Home;
