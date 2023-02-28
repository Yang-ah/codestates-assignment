import React from "react";
import styles from "./product.module.scss";

//onClick = () => {}
const Product = ({ product, onClick }) => {
  // const navigate = useNavigate();

  // const onClick = () => {
  //   navigate(`/${product.id}`);
  // };

  return (
    <li className={styles.wrapper} onClick={onClick}>
      <img src={product.thumbnail} alt="product thumbnail" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </li>
  );
};

export default Product;
