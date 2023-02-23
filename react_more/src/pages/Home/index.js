import React, { useState, useEffect } from "react";

import styles from "./home.module.scss";

const Home = () => {
  /**
   * state를 사용하는 이유?
   * 1) 화면에 **(변화가)** 보이기 위해서는 state를 사용할 수 밖에 없다.
   *
   * state 사용 시기
   * 1) 화면에 반영이 되는 데이터 혹은 화면에 영향을 주는 변수
   *   ex) 모달, 데이터가 있어야 보이는 화면,
   *       서버에서 데이터를 **가져오는 동안** 뭔가를 보여줘야 할 때 (서버에 요청은 했으나, 데이터는 없는 상태)
   * 2) 데이터를 가져왔는데, 가져온 데이터를 가지고 뭔가를 해야할 때
   *   ex) 데이터를 보관할 때, 데이터를 수정해야할 때
   * 3) 변경이 되는 변수
   */

  //MEMO: let으로 선언된 변수는 화면(view)에 반영이 되지 않는다.
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onClickPlusButton = () => {
    setCount(count + 1);
  };

  const onClickMinusButton = () => {
    setCount(count - 1);
  };

  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

  //id가 처음에 undefined일 수 있음,
  //MEMO: 첫 번째 인자 => 함수 / 두 번째 인자 => 의존성 배열(deps)
  //MEMO: 기본적인 원리 => deps안의 값이 변경되면, 함수를 실행한다.
  // 사이드 이펙트 (Side Effect) : 다른 코드에 의해서 실행이 되는 코드 및 현상
  /**
   * useEffect 사용 시기
   * 1) 어떤 변수가 변경될 때마다 실행되어야하는 로직이 있을 때
   * 2) 특정 상황을 감지해야 할 때
   */
  useEffect(() => {
    console.log("useEffect 실행! ", count);
    if (count === 10) {
      alert("10이 되었습니다.");
    }
  }, [count]);

  /**
   * React의 기본적인 Life Cycle (코드의 실행 순서)
   * 1) setState
   * 2) 해당 state에 의존하고 있는 useEffect 실행
   * 3) re-render
   */

  return (
    <section className={styles.wrapper}>
      <h1>Home</h1>
      <p>count : {count}</p>
      <button onClick={onClickPlusButton}>증가</button>
      <button onClick={onClickMinusButton}>감소</button>
      <button onClick={onOpenModal}>열기</button>
      <button onClick={onCloseModal}>닫기</button>
      {isOpen && (
        <div className={styles.modal}>
          <h1>모달</h1>
          <p>
            이렇게 어려운 결제 연동, 토스페이먼츠가 결제위젯으로 쉽게
            풀어드려요! 😊 결제위젯은 한 번 연동하면 다양한 결제 수단과 커스텀
            디자인을 노코드(No-code)로 제공하는 서비스입니다. 이번 포스트에는
            결제위젯으로 간단한 온라인 결제 페이지를 만들어볼게요. 마지막에
            토스페이먼츠 결제전담팀을 빌려갈 수 있는 이벤트도 있으니, 끝까지
            읽어주세요.
          </p>
        </div>
      )}
    </section>
  );
};

export default Home;
