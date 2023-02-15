import { useState, useMemo, useCallback, useEffect } from "react";
import Card from "./Card";
import styles from "./home.module.scss";

const Home = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  //MEMO: useMemo는 값을 return
  const totalCount = useMemo(() => {
    return Math.pow(2, 10);
  }, []);
  //MEMO: 리렌더 이전 arr[1,2,3] === 리렌더 이후 arr[1,2,3,4] ??? =>true

  //MEMO: useCallback는 함수를 return
  const onClickButton = useCallback(() => {
    setArr((prev) => [...prev, 1]);
  }, []);

  useEffect(() => {
    //~~~~
    return () => {}; //이벤트리스너
  }, []);

  return (
    <main className={styles.wrapper}>
      <h1>Home </h1>
      <div>count : {count}</div>
      <div>totalCount : {totalCount}</div>
      <button onClick={onClickButton}>버튼</button>
      <div>Ref를 쓸 div</div>
      <Card text={`${totalCount}`} />
    </main>
  );
};

export default Home;
