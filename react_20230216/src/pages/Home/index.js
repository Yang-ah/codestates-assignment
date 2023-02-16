import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import axios from "axios";

const API_URL = "https://koreanjson.com";

const Home = () => {
  const [data, setData] = useState(null);

  const onGetData = async () => {
    // MEMO: fetch 사용
    // const response = await fetch(`${API_URL}/users/1`, { method: "GET" });
    // const responseData = await response.json();
    // setData(responseData);

    // MEMO: axios 사용
    const { data } = await axios.get(`${API_URL}/users/1`);
    setData(data);
  };

  useEffect(() => {
    onGetData();
  }, []);
  return (
    <main className={styles.wrapper}>
      <h1>Home </h1>
      <div>count : 10</div>
      <div>totalCount :10</div>
      <button>버튼</button>
      <div>Ref를 쓸 div</div>
      <div>
        {data?.province}
        {data?.district}
        {data?.city}
      </div>
    </main>
  );
};

export default Home;
