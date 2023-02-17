import React from "react";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div>
      <main className={styles.wrapper}>
        <h1>Home </h1>
        <div className={styles.hello}>hello</div>
      </main>
      <div className={styles.hello}>hello</div>
    </div>
  );
};

export default Home;
