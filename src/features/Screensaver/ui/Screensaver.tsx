import { FC, Dispatch, SetStateAction, useEffect, useRef } from "react";

import styles from "./Screensaver.module.scss";

interface ScreensaverProps {
  setIsEnded: Dispatch<SetStateAction<boolean>>;
}

export const Screensaver: FC<ScreensaverProps> = ({ setIsEnded }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((error) => console.log("Autoplay blocked:", error));
      }
    };

    // Запускаем музыку при первом взаимодействии пользователя
    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <>
      <video
        className={styles.video}
        src="/quiz/OPENING.mp4"
        autoPlay
        muted
        onEnded={() => setIsEnded(true)}
      />
      <audio ref={audioRef} src="/quiz/music1.mp3" preload="auto" loop />
    </>
  );
};
