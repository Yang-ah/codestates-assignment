import React, { useState } from "react";
import cx from "classnames";
import { ChevronIcon } from "../../assets/icon";
import styles from "./home.module.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.wrapper}>
      <h1>드롭다운</h1>
      <div className={styles.dropdownWrapper}>
        <div className={styles.dropdownInfo} onClick={onClickIcon}>
          <p>Dropdown</p>
          <ChevronIcon
            className={cx(styles.icon, { [styles.isOpen]: isOpen })}
          />
        </div>
        <menu className={cx(styles.itemWrapper, { [styles.isOpen]: isOpen })}>
          <li className={styles.item}>Item 1</li>
          <li className={styles.item}>Item 2</li>
          <li className={styles.item}>Item 3</li>
        </menu>
      </div>
    </section>
  );
};

export default Home;
