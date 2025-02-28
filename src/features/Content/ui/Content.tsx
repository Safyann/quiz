import { FC, useEffect, useState } from "react";

import { Form } from "~/widgets/Form";
import { Onboarding } from "~/widgets/Onboarding";

import { Finish } from "~/features/Finish";

export const Content: FC = () => {
  const [step, setStep] = useState(1);
  const [finished, setFinished] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStep(2);
    }, 6000);
  }, []);

  // if (step === 1) {
  //   return <Onboarding />;
  // }

  return <>{!finished ? <Form setFinished={setFinished} /> : <Finish />}</>;
};
