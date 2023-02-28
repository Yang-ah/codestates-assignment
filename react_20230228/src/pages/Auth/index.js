import React from "react";
import styles from "./auth.module.scss";

const Auth = () => {
  return (
    <main className={styles.wrapper}>
      <section>
        <form
          className={styles.inputWrapper}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>
            <p>아이디</p>
            <input placeholder="아이디를 입력해주세요." />
          </label>
          <label>
            <p>비밀번호</p>
            <input placeholder="비밀번호를 입력해주세요." />
          </label>
          <button type="submit">로그인</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
