import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import classNames from "classnames";
import { motion } from "framer-motion";

import { Button } from "~/shared/ui/Button";

import { questions } from "../questions";
import style from "./Form.module.scss";

interface FormProps {
  setFinished: Dispatch<SetStateAction<boolean>>;
}

export const Form: FC<FormProps> = ({ setFinished }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError)
      setTimeout(() => {
        setIsError(false);
      }, 500);
  }, [isError]);

  const handleAnswer = (option: string) => {
    if (option === questions[currentQuestion].answer) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setFinished(true);
      }
    } else {
      setIsError(true);
    }
  };
  return (
    <>
      <div className={style.imgs}>
        <img
          className={style.chcuelo}
          src={currentQuestion > 5 ? "/quiz/123.png" : "/quiz/1112222.png"}
          alt=""
        />
        <img className={style.earth} src="/quiz/earth.png" alt="" />
        {currentQuestion > 0 && currentQuestion <= 3 && (
          <motion.img
            className={style.nat}
            src="/quiz/11.png"
            alt=""
            initial={{ x: 0 }}
            animate={{ x: 100 }}
            transition={{ duration: 0.7 }}
          />
        )}
        {currentQuestion > 1 && currentQuestion <= 4 && (
          <motion.img
            className={style.ale}
            src="/quiz/21.png"
            alt=""
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          />
        )}
        {currentQuestion > 3 && (
          <img
            className={classNames(style.nat2, {
              [style.nat3]: currentQuestion > 5,
            })}
            src="/quiz/12.png"
            alt=""
          />
        )}
        {currentQuestion > 4 && (
          <img
            className={classNames(style.ale2, {
              [style.ale3]: currentQuestion > 5,
            })}
            src="/quiz/22.png"
            alt=""
          />
        )}
      </div>
      {isError && <div className={style.error}></div>}
      <div className={style.title}>
        {currentQuestion > 2 && (
          <img className={style.img} src="/quiz/alex.png" alt="" />
        )}
        <h2 className={style.text}>{questions[currentQuestion].question}</h2>
      </div>
      <div
        className={classNames({
          [style.grid]: questions[currentQuestion].options.length === 4,
          [style.list]: questions[currentQuestion].options.length === 3,
        })}
      >
        {questions[currentQuestion].options.map((option) => (
          <Button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </Button>
        ))}
      </div>
    </>
  );
};
