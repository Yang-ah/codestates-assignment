import "./calculator.css";

import { items } from "./constants";

const Calculator = () => {
  // (map으로 return 되는 컴포넌트의 key)중복되지 않는 값
  const keyboardItems = items.map((item, index) => {
    return (
      <li
        key={`${item.first}${item.second}${item.third}${item.fourth}`}
        className="item"
      >
        <div>{item.first}</div>
        <div>{item.second}</div>
        <div>{item.third}</div>
        <div>{item.fourth}</div>
      </li>
    );
  });
  return (
    <section className="calculator">
      <section className="screen"></section>
      <section className="keyboard">
        <ul className="list">
          {keyboardItems}
          <li className="item">
            <div className="zero">0</div>
            <div>.</div>
            <div>=</div>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Calculator;
