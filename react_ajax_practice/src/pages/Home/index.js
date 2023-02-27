import React, { useEffect, useState } from "react";
import { getProducts, searchProduct } from "../../api/Products";

import styles from "./home.module.scss";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onGetProducts = async () => {
    //서버에서 데이터를 불러옴.
    const response = await getProducts();

    if (response.status === 200) {
      setProducts(response.data.products);
    }
  };

  //MEMO: 검색하는 함수
  const onSearch = async () => {
    const response = await searchProduct({
      q: searchText,
    });

    if (response.status === 200) {
      setProducts(response.data.products);
    }
  };

  //2가지 기능
  const onClear = () => {
    //1) 전체 products를 불러오는 기능
    onGetProducts();
    //2) 검색창을 초기화하는 기능
    setSearchText("");
  };

  const onChange = (e) => {
    const { value } = e.currentTarget;
    setSearchText(value);
  };

  useEffect(() => {
    onGetProducts();
  }, []);

  //MEMO: 디자인 + 기획 => 백엔드 개발자 => 퍼블리싱(디자인을 화면으로 옮기는 작업) + 설계 => API 연동 (API를 붙인다)

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Home</h1>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="searchText"
            value={searchText}
            onChange={onChange}
          />
          <button type="button" onClick={onSearch}>
            검색
          </button>
          <button type="button" onClick={onClear}>
            초기화
          </button>
        </div>
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
