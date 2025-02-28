import { FC, useState } from "react";

import { Background } from "./Background";
import styles from "./Finish.module.scss";

export const Finish: FC = () => {
  const [isEndedVideo, setIsEndedVideo] = useState(false);

  return (
    <>
      {!isEndedVideo ? (
        <div className={styles.step1}>
          <img src="/quiz/1112222.png" alt="" />
          <video
            className={styles.fire}
            src="/quiz/fire.mp4"
            autoPlay
            muted
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
          <Background className={styles.bg} />
        </>
      )}
    </>
  );
};
