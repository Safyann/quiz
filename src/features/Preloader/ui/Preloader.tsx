import { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import styles from "./Preloader.module.scss";

const texts = ["Ищем спички...", "Заполянем канистры..."];

export function Preloader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length); // Переключение текста циклически
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  size-full">
      <video src="/PRELOADER.webm" autoPlay loop muted />
      <AnimatePresence mode="wait">
        <motion.div
          key={texts[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className={styles.text}
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
