import { FC, useState } from "react";

import { Background } from "./Background";
import styles from "./Finish.module.scss";

export const Finish: FC = () => {
  const [isEndedVideo, setIsEndedVideo] = useState(false);

  return (
    <>
      {!isEndedVideo ? (
        <video
          className={styles.video}
          src="/OPENING.webm"
          autoPlay
          muted
          onEnded={() => setIsEndedVideo(true)}
        />
      ) : (
        <>
          <div className={styles.images}>
            <img src="/nat.png" alt="" />
            <img src="/alex.png" alt="" />
            <img src="/alena.png" alt="" />
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
