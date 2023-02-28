import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/Products";
import styles from "./product.module.scss";

/**
 * FIXME: Error: Node Sass version 8.0.0 is incompatible with ^4.0.0.
 * 1) 프로젝트에 node-sass가 깔려있는지 확인
 * MEMO: node-sass는 deprecated(사용하지 않는 것을 권장)되었기 때문에 sass를 사용해야 함
 * 2) package.json에서 제 버전과 다른게 있는지 확인
 * */

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  const onGetProduct = async () => {
    const response = await getProduct(params.id);

    if (response.status === 200) {
      setProduct(response.data);
    }
  };

  // MEMO: Optional Chaining(옵셔널 체이닝)
  //        => null 혹은 undefined일 수 있는 객체의 property에 접근할 때 사용
  console.log({ product, params }, product?.id);

  useEffect(() => {
    //MEMO: params.id => id는 path variable
    if (!params.id) {
      return;
    }
    onGetProduct();
  }, [params.id]);

  return (
    <main className={styles.wrapper}>
      <section>
        <img src={product?.thumbnail} alt="product thumbnail" />
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
      </section>
    </main>
  );
};

export default Product;
