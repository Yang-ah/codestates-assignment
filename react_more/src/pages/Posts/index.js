import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../api/Products";

const arr = [
  { id: 1, title: "제목1" },
  { id: 2, title: "제목2" },
  { id: 3, title: "제목3" },
  { id: 4, title: "제목4" },
  { id: 5, title: "제목5" },
  { id: 6, title: "제목6" },
  { id: 7, title: "제목7" },
  { id: 8, title: "제목8" },
];

const Posts = () => {
  const navigate = useNavigate();

  const onGetProducts = async () => {
    //MEMO: axios는 클라이언트(프런트엔드)에서 서버로 요청을 보낼 수 있게하는 라이브러리

    const response = await createProduct({
      title: "맥북 프로",
      brand: "Apple",
      category: "노트북",
      description: "맥북 프로 노트북입니다.",
    });

    /**
     * import axios from "axios";를 매번 할 수 없는 경우
     * 1) base_url (호스트)가 동일한 요청을 자주 보내는 경우
     * 2) 요청 전/후로 특정 코드를 실행하고 싶은 경우 혹은 특정 작업을 같이 병행하고 싶은 경우
     * 3) request나 response에 어떤 작업을 하고 싶은 경우 (headers에 토큰을 넣어서 보내는 경우)
     */
    //  => axios.create : 인스턴스가 생성
    // 인스턴스의 역할
    // 1) base_url을 설정
    // 2) 인스턴스를 통해서 요청을 보내면, 그 요청은 같은 인스턴스를 통해서 요청을 보내는 것이다.
    // 3) 인스턴스를 통해 인터셉터 (.use())를 설정해서 요청 전/후에 특정 작업을 할 수 있다.

    console.log({ response });
  };

  const onClickItem = (id) => {
    return () => {
      navigate(`/posts/${id}`);
    };
  };
  useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <section style={{ padding: "20px" }}>
      <h1>Posts Page</h1>
      <ul>
        {arr.map((item) => (
          <li onClick={onClickItem(item.id)}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Posts;
