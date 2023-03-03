import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./auth.module.scss";

//MEMO: lodash => lodash-es
const Auth = () => {
  // const { register, handleSubmit } = useForm();
  const [form, setForm] = useState({
    userId: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    // TODO: login API 연동
    // await loginApi({
    //   userId: form.userId,
    //   password: form.password,
    // });
  };

  // const onSubmitForReactForm = (data) => {
  //   console.log(`Sumbit By react-hook-form`, data);
  // };

  return (
    <main className={styles.wrapper}>
      <section>
        <h1>로그인</h1>
        <form
          id="loginForm"
          className={styles.loginForm}
          // onSubmit={handleSubmit(onSubmitForReactForm)}
          onSubmit={onSubmit}
        >
          <label className={styles.inputWrapper}>
            <p>아이디</p>
            <input
              placeholder="아이디를 입력해주세요."
              name="userId"
              value={form.userId}
              onChange={onChange}
              // {...register("userId")}
            />
          </label>
          <label className={styles.inputWrapper}>
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              name="password"
              value={form.password}
              onChange={onChange}
              // {...register("password")}
            />
          </label>
          <button
            className={styles.submitButton}
            type="submit"
            form="loginForm"
          >
            로그인
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
