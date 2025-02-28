import { FC, useEffect, useState } from "react";

import { motion } from "framer-motion";

import styles from "./Finish.module.scss";

export const Finish: FC = () => {
  const [isEndedVideo, setIsEndedVideo] = useState(false);
  const [isFireEnd, setIsFireEnd] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsEnd(true);
    }, 10000);
    setTimeout(() => {
      setIsEndedVideo(true);
    }, 8000);
    setTimeout(() => {
      setIsFireEnd(true);
    }, 4000);
  }, []);

  return (
    <>
      {!isEndedVideo ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.step1}
        >
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
        </motion.div>
      ) : null}
      {isEnd && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
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
        </motion.div>
      )}
    </>
  );
};
