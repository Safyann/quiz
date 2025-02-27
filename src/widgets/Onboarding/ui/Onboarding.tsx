import { FC, useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import styles from "./Onboarding.module.scss";

const texts = [
  "Канистры заполнены, спички в кармане",
  " Но, чтобы сжечь чучело, нужно ответить на несколько вопросов",
];

export const Onboarding: FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={texts[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7 }}
        className={styles.title}
      >
        {texts[index]}
      </motion.div>
    </AnimatePresence>
  );
};
