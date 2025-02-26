import { useState } from "react";

import { motion } from "framer-motion";

import { CardContent } from "~/widgets/CardContent";

import { Card } from "~/features/Card";

import { Button } from "~/shared/ui/Button";

import { questions } from "./questions";

export const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 size-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Card className="w-full max-w-md p-6 text-center">
          <CardContent>
            {finished ? (
              <motion.h2
                className="text-xl font-bold"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Ваш результат: {score} из {questions.length}
              </motion.h2>
            ) : (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg font-bold mb-4">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid gap-2">
                  {questions[currentQuestion].options.map((option) => (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      key={option}
                    >
                      <Button onClick={() => handleAnswer(option)}>
                        {option}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
