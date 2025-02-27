import { useEffect, useState } from "react";

import { Content } from "~/features/Content";
import { Preloader } from "~/features/Preloader";
import { Screensaver } from "~/features/Screensaver";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEndedVideo, setIsEndedVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4001);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  size-full">
      {!isEndedVideo ? (
        <Screensaver setIsEnded={setIsEndedVideo} />
      ) : (
        <Content />
      )}
    </div>
  );
};
