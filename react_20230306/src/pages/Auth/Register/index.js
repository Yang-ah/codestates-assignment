import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoRegister, register } from "../../../api/Auth";
import qs from "query-string";
import styles from "./register.module.scss";
import { saveTokens, isValidateEmail } from "../../../utils";

//NOTE: 분기처리 대상
//NOTE: 1) password
//NOTE: 2) 회원가입 API

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });
  //MEMO: password는 일반 회원가입 때만 사용

  const isSocial = location.search.includes("token");

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  //NOTE: 회원가입 API를 return 해주는 함수
  const onGetRegisterApi = () => {
    if (isSocial) {
      return kakaoRegister;
    } else {
      return register;
    }
  };

  const onSubmit = async (e) => {
    //NOTE: 새로고침 방지
    e.preventDefault();

    if (!isValidateEmail(form.email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    const registerApi = onGetRegisterApi();
    let body = {
      email: form.email,
      name: form.name,
    };
    if (isSocial) {
      const search = qs.parse(location.search);
      body.token = search.token;
    } else {
      body.password = form.password;
    }

    const response = await registerApi(body);
    if (response.status === 200) {
      const data = response.data;
      saveTokens(data);
      navigate("/");
    }
  };

  return (
    <main className={styles.wrapper}>
      <section>
        <h1>회원가입</h1>
        <form id="loginForm" className={styles.loginForm} onSubmit={onSubmit}>
          <label className={styles.inputWrapper}>
            <p>이름</p>
            <input
              placeholder="이름을 입력해주세요."
              name="name"
              value={form.name}
              onChange={onChange}
            />
          </label>
          <label className={styles.inputWrapper}>
            <p>이메일</p>
            <input
              placeholder="이메일을 입력해주세요."
              name="email"
              autoComplete="off"
              value={form.email}
              onChange={onChange}
            />
          </label>
          {!isSocial && (
            <label className={styles.inputWrapper}>
              <p>비밀번호</p>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                name="password"
                autoComplete="off"
                value={form.password}
                onChange={onChange}
              />
            </label>
          )}
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

export default Register;
