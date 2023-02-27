import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/Products";

import styles from "./home.module.scss";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  const onGetProducts = async () => {
    //서버에서 데이터를 불러옴.
    const response = await getProducts();

    if (response.status === 200) {
      setProducts(response.data.products);
    }
  };

  useEffect(() => {
    onGetProducts();
  }, []);

  //MEMO: 디자인 + 기획 => 백엔드 개발자 => 퍼블리싱(디자인을 화면으로 옮기는 작업) + 설계 => API 연동 (API를 붙인다)

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Home</h1>
      </header>
      <section className={styles.productsWrapper}>
        <ul>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Home;
