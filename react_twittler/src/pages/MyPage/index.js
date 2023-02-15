import React from "react";
import Footer from "../../components/Layout/Footer";
import Tweet from "../../components/Tweet";
import styles from "./MyPage.module.css";
import dummyTweets from "../../static/dummyData";

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(
    (tweet) => tweet.username === "parkhacker"
  );
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.

  return (
    <section className={styles.myInfo}>
      <div className={styles.myInfo__container}>
        <div className={styles.myInfo__wrapper}>
          <div className={styles.myInfo__profile}>
            <img src={filteredTweets[0].picture} />
          </div>
          <div className={styles.myInfo__detail}>
            <p className={styles.myInfo__detailName}>
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className={styles.tweets__mypage}>
        <Tweet tweet={filteredTweets[0]} />
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
