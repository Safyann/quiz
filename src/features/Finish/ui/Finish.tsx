import { FC, useEffect, useState } from "react";

import styles from "./Finish.module.scss";

export const Finish: FC = () => {
  const [isEndedVideo, setIsEndedVideo] = useState(false);
  const [isFireEnd, setIsFireEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsEndedVideo(true);
    }, 6000);
    setTimeout(() => {
      setIsFireEnd(true);
    }, 4000);
  }, []);

  return (
    <>
      {!isEndedVideo ? (
        <div className={styles.step1}>
          <img
            className={styles.chucelo}
            src={isFireEnd ? "/quiz/12221212.png" : "/quiz/1112222.png"}
            alt=""
          />

          <img className={styles.earth} src="/quiz/earth.png" alt="" />

          <video
            className={styles.fire}
            src="/quiz/PRELOADER.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      ) : (
        <>
          <div className={styles.images}>
            <img src="/quiz/nat.png" alt="" />
            <img src="/quiz/alex.png" alt="" />
            <img src="/quiz/alena.png" alt="" />
          </div>
          <h2 className={styles.title}>
            Чучело сгорело <br />А теперь дальше работать
          </h2>
          <img className={styles.earth} src="/quiz/earth.png" alt="" />
          <img className={styles.coals} src="/quiz/coals.png" alt="" />
          <video
            className={styles.video}
            src="/quiz/PRELOADER.mp4"
            autoPlay
            loop
            muted
          />
        </>
      )}
    </>
  );
};
