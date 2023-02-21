import React, { useState } from "react";
import { getProducts } from "../../api/Products";

import styles from "./home.module.scss";

const Home = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  const onGetItem = async () => {
    const response = await getProducts();
  };

  return (
    <div class={styles.wrapper}>
      <button onClick={onClick}>Up</button>
      <button onClick={onGetItem}>API 호출</button>
      {/* <div class={styles.item}>A</div>
      <div class={styles.item}>B</div>
      <div class={styles.item}>C</div>
      <div class={styles.item}>D</div>
      <div class={styles.item}>E</div>
      <div class={styles.item}>F</div>
      <div class={styles.item}>G</div>
      <div class={styles.item}>H</div>
      <div class={styles.item}>I</div> */}
    </div>
  );
};

export default Home;
