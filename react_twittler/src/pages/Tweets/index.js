// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from "react";
import Footer from "../../components/Layout/Footer";
import Tweet from "../../components/Tweet";
import styles from "./Tweets.module.css";
import dummyTweets from "../../static/dummyData";

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.

  const [tweets, setTweets] = useState(dummyTweets);
  const [input, setInput] = useState({
    username: "",
    content: "",
  });

  const handleButtonClick = (event) => {
    setTweets((prev) => [
      ...prev,
      {
        ...input,
        id: prev.length + 1,
        picture: "https://randomuser.me/api/portraits/men/98.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  };

  const onChange = (e) => {
    const { value, name } = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <div className={styles.tweetForm__container}>
        <div className={styles.tweetForm__wrapper}>
          <div className={styles.tweetForm__profile}>
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className={styles.tweetForm__inputContainer}>
            <div className={styles.tweetForm__inputWrapper}>
              <div className={styles.tweetForm__input}>
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className={styles["tweetForm__input--username"]}
                  name="username"
                  onChange={onChange}
                  value={input.username}
                ></input>
                <textarea
                  name="content"
                  onChange={onChange}
                  className={styles["tweetForm__input--content"]}
                  value={input.content}
                />
              </div>
              <div className={styles.tweetForm__count} role="status">
                <span className={styles.tweetForm__count__text}>
                  total : {tweets.length}
                </span>
              </div>
            </div>
            <div className={styles.tweetForm__submit}>
              <div className={styles.tweetForm__submitIcon}></div>
              <button
                type="button"
                className={styles.submitButton}
                onClick={handleButtonClick}
              >
                제출
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tweet__selectUser}></div>
      <ul className={styles.tweets}>
        {tweets.reverse().map((tweet) => (
          <Tweet tweet={tweet} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
