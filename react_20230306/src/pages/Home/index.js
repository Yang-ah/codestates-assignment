import React, { useState } from "react";
import cx from "classnames";
import { ChevronIcon } from "../../assets/icon";
import { LogoImage } from "../../assets/images";
import styles from "./home.module.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.wrapper}>
      <nav>
        <li>shop</li>
        <li>menu</li>
        <li>
          <img src={LogoImage} alt="logo" width={40} height={40} />
        </li>
        <li>about</li>
        <li>posts</li>
      </nav>

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
