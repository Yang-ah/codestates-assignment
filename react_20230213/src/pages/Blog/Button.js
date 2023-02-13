import { useNavigate } from "react-router-dom";
import styles from "./button.module.css";

const Button = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/blog/123");
  };

  return (
    <>
      <button className={styles.button} onClick={onClickButton}>
        디테일로 이동
      </button>
      <button className={styles.button} onClick={onClickButton}>
        디테일로 이동
      </button>
      <button className={styles.button} onClick={onClickButton}>
        디테일로 이동
      </button>
      <div className={styles.wrapper}>버튼 style 파일이에요</div>
    </>
  );
};

export default Button;
