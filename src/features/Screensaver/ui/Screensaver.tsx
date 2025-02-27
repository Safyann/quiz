import { FC, Dispatch, SetStateAction } from "react";

import styles from "./Screensaver.module.scss";

interface ScreensaverProps {
  setIsEnded: Dispatch<SetStateAction<boolean>>;
}

export const Screensaver: FC<ScreensaverProps> = ({ setIsEnded }) => {
  return (
    <video
      className={styles.video}
      src="/OPENING.webm"
      autoPlay
      muted
      onEnded={() => setIsEnded(true)}
    />
  );
};
