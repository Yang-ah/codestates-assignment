import React, { useState } from "react";
import { Button, CheckBox, Dropdown, Input, Toggle } from "../../components";
import styles from "./home.module.scss";

//TODO: Button, Input, Toggle, Checkbox
/**
 * Branch
 * main : 보통 배포용
 * develop : 보통 개발용
 * feature : 기능 단위 개발을 할 때 만들었다가, 기능 개발을 완료하면 삭제하는 브랜치
 *  ex) 버튼을 만든다! - feature/button, 메인페이지 개발을 하겠다! - feature/mainPage
 *
 * 1) git cli로 머지하는 방법 : develop branch에서 git merge feature/button
 * 2) pull request : develop <- feature/button
 */

const dropdownItems = [
  {
    id: 1,
    email: "item1",
    nickname: "item1-value",
  },
  {
    id: 2,
    email: "item2",
    nickname: "item2-value",
  },
  {
    id: 3,
    email: "item3",
    nickname: "item3-value",
  },
  {
    id: 4,
    email: "item4",
    nickname: "item4-value",
  },
];

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onClickPrimaryButton = () => {
    setIsError(!isError);
  };

  const onChangeToggle = (e) => {
    const { checked } = e.currentTarget;
    setIsChecked(checked);
  };

  const onClickDropdown = (item) => {
    return () => {
      setSelectedItem((prev) => (prev?.id === item.id ? null : item));
    };
  };

  return (
    <main>
      <section className={styles.wrapper}>
        <header>
          <h1>MainPage</h1>
        </header>
        <h2>Button</h2>
        <Button className={styles.exampleButton} onClick={onClickPrimaryButton}>
          button예시
        </Button>
        <Button color="secondary">button예시</Button>
        <h2>Input</h2>
        <Input label="label" />
        <Input label="label" errorText={isError && "errorText"} />
        <h2>Toggle</h2>
        <Toggle checked={isChecked} onChange={onChangeToggle} />
        <h2>CheckBox</h2>
        <CheckBox />
        <h2>Dropdown</h2>
        <Dropdown
          items={dropdownItems}
          valueKey="email"
          value={selectedItem?.email}
          onClick={onClickDropdown}
        />
      </section>
    </main>
  );
};

export default Home;
