import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import classNames from "classnames";

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
      <video
        className={style.video}
        src="/quiz/OPENING.mp4"
        autoPlay
        muted
        loop
      />
      <img className={style.earth} src="/quiz/earth.png" alt="" />
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
