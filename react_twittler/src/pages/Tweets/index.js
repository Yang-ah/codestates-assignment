import React, { useState } from "react";
import Footer from "../../components/Layout/Footer";
import Tweet from "../../components/Tweet";
import styles from "./Tweets.module.css";
import dummyTweets from "../../static/dummyData";

const Tweets = () => {
  const [tweets, setTweets] = useState(dummyTweets);
  const [input, setInput] = useState({
    username: "parkhacker",
    content: "",
  });

  const handleButtonClick = () => {
    const newTweet = {
      ...input,
      id: tweets.length + 1, //MEMO: 서버
      picture: "https://randomuser.me/api/portraits/men/98.jpg",
      createdAt: new Date(), //MEMO: 서버
      updatedAt: new Date(), //MEMO: 서버
    };
    const tmpTweets = [newTweet, ...tweets];
    setTweets(tmpTweets);
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
                  placeholder="your username here.."
                  className={styles["tweetForm__input--username"]}
                  name="username"
                  onChange={onChange}
                  value={input.username}
                />
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
        {tweets.map((tweet) => (
          <Tweet key={`${tweet.id}-${tweet.username}`} tweet={tweet} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
