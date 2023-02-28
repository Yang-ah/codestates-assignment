import React from "react";

import styles from "./home.module.scss";

const Home = () => {
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
