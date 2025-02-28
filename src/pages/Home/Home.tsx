import { useEffect, useRef, useState } from "react";

import { Content } from "~/features/Content";
import { Preloader } from "~/features/Preloader";
import { Screensaver } from "~/features/Screensaver";

// const videoUrls = ["/quiz/OPENING.mp4"];

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEndedVideo, setIsEndedVideo] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

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
      <audio
        ref={audioRef}
        src="/quiz/vo-sadu-li-v-ogorode.mp3"
        preload="auto"
      />
    </div>
  );
};
