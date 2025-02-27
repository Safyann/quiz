import { useEffect, useState } from "react";

import { Content } from "~/features/Content";
import { Preloader } from "~/features/Preloader";
import { Screensaver } from "~/features/Screensaver";

// const videoUrls = ["/quiz/OPENING.webm"];

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEndedVideo, setIsEndedVideo] = useState(false);

  useEffect(() => {
    // let loadedCount = 0;
    // videoUrls.forEach((url) => {
    //   const video = document.createElement("video");
    //   video.src = url;
    //   video.onloadeddata = () => {
    //     loadedCount++;
    //     if (loadedCount === videoUrls.length) {
    //       setIsLoading(false);
    //     }
    //   };
    // });
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
