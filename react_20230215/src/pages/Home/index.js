import { useState } from "react";
import Card from "./Card";
import styles from "./home.module.scss";

const Home = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setCount((prev) => {
      return prev + 1;
    });
  };

  const onClick2 = (e) => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  const onChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onClickDiv = (e) => {
    console.log(`target`, e.target); //클릭이 발생한 곳의 태그
    console.log(`current target`, e.currentTarget); // 이벤트가 넣어져(걸려) 있는 태그
  };

  return (
    <main className={styles.wrapper}>
      <h1>onChange</h1>
      <p>이메일 : {form.email}</p>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={form.email}
        onChange={onChange}
      />
      <p>비밀번호 : {form.password}</p>
      <input
        className={styles.input}
        type="text"
        name="password"
        value={form.password}
        onChange={onChange}
      />
      <h1>onClick</h1>
      <p>count : {count}</p>
      <div className={styles.buttonWrapper} onClick={onClickDiv}>
        <p>P태그</p>
        <button type="button" onClick={onClick}>
          숫자 증가
        </button>
      </div>
      <p>isOpen : {`${isOpen}`}</p>
      {isOpen && <Card text={"오픈되었네요?1 : &&"} />}
      {isOpen || <Card text={"오픈되었네요?2 : ||"} />}
      <button type="button" onClick={onClick2}>
        오픈 변경
      </button>
    </main>
  );
};

export default Home;

/**
 *   //MEMO: ON/OFF 상태
  const [isOn, setIsOn] = useState(false);

  //MEMO: 사용 가능/불가능 상태
  const [isAvailable, setIsAvailable] = useState(false);

  //MEMO: input에 입력한 값
  const [text, setText] = useState("");

  //MEMO: 특정 상황에 컴포넌트를 띄우고 싶을 때
  const [isOpen, setIsOpen] = useState(false);

  //MEMO: 데이터를 변경 가능하도록 사용하고 싶을 때
  const [data, setData] = useState({
    name: "John",
    age: 2,
  });

 */
