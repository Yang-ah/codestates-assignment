import React from "react";
import styles from "./Tweet.module.css";

const Tweet = ({ tweet }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString("ko-kr");

  return (
    <li className={styles.tweet} id={tweet.id}>
      <div className={styles.tweet__profile}>
        <img src={tweet.picture} />
      </div>
      <div className={styles.tweet__content}>
        <div className={styles.tweet__userInfo}>
          <div className={styles["tweet__userInfo--wrapper"]}>
            <p>{tweet.username}</p>
            <p>{parsedDate}</p>
          </div>
        </div>
        <div className={styles.tweet__message}>{tweet.content}</div>
      </div>
    </li>
  );
};

export default Tweet;
