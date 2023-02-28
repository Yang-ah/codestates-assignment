import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, searchProduct } from "../../api/Products";

import styles from "./home.module.scss";
import Product from "./Product";

const Home = () => {
  const navigate = useNavigate();

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

  //MEMO: id값을 받아서 path variable로 사용하는 함수
  const onNavigateDetail = (id) => {
    return () => {
      //MEMO: navigate를 할 때는 /가 있어야 함
      navigate(`/${id}`);
    };
  };

  useEffect(() => {
    onGetProducts();
  }, []);

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
            return (
              <Product
                key={product.id}
                product={product}
                onClick={onNavigateDetail(product.id)}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Home;
