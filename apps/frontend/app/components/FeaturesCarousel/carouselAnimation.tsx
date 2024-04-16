import video from "@/images/applevideo.mp4";
import { Box, Flex } from "@radix-ui/themes";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { DotButton, useDotButton } from "./carouselDots";
export default function CarouselAnimation() {
  type Content = {
    id: number;
    video: string;
  };

  const videoContent: Content[] = [
    {
      id: 1,
      video: video,
    },
    {
      id: 2,
      video: video,
    },
    {
      id: 3,
      video: video,
    },

    {
      id: 4,
      video: video,
    },
  ];
  const options: EmblaOptionsType = { align: "start", direction: "ltr" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ stopOnInteraction: true }),
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<Record<number, HTMLVideoElement>>({});
  const [currentCarouselVideo, setCurrentCarouselVideo] =
    useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRefs.current[1]) {
      // Se o primeiro vídeo estiver disponível
      setCurrentCarouselVideo(videoRefs.current[1]); // Definir o primeiro vídeo como o atual
    }
  }, []);
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("scroll", () => {
        const selectedVideo = videoRefs.current[selectedIndex + 1];
        setCurrentCarouselVideo(selectedVideo);
      });
    }
  }, [emblaApi, selectedIndex]);
  useEffect(() => {
    if (!currentCarouselVideo) return;

    const playHandler = () => {
      setIsPlaying(true);
    };

    const pauseHandler = () => {
      setIsPlaying(false);
    };

    currentCarouselVideo.addEventListener("play", playHandler);
    currentCarouselVideo.addEventListener("pause", pauseHandler);

    return () => {
      currentCarouselVideo.removeEventListener("play", playHandler);
      currentCarouselVideo.removeEventListener("pause", pauseHandler);
    };
  }, [currentCarouselVideo]);
  function toggleVideo() {
    if (!currentCarouselVideo) return;

    if (isPlaying) {
      currentCarouselVideo.play();
    } else {
      currentCarouselVideo.pause();
    }
  }

  return (
    <section className="embla " dir="ltr">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videoContent.map((video) => (
            <div className="embla__slide flex justify-center" key={video.id}>
              <Box className=" overflow-hidden rounded-[4rem]">
                <video
                  ref={(element) => {
                    if (element) {
                      videoRefs.current[video.id] = element;
                    }
                  }}
                  autoPlay
                  onClick={() => toggleVideo()}
                  src={video.video}
                ></video>
              </Box>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <Flex align="center" justify="center" className=" w-full relative">
          <Flex className="relative" align="center" justify="center">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : "",
                )}
              />
            ))}
            <button
              onClick={toggleVideo}
              className="absolute -right-14  bg-[#f5f5f7] toggleVideoButton w-[38px] h-[38px] rounded-full"
            >
              <svg viewBox="0 0 56 56">
                {currentCarouselVideo?.paused ? (
                  <path d="M23.9,38.5h-2.3c-1.3,0-2.3-1-2.3-2.2V19.7c0-1.3,1.1-2.3,2.3-2.2h2.3c1.3,0,2.3,1,2.3,2.2v16.5 C26.2,37.5,25.2,38.5,23.9,38.5 M34.4,38.5c1.3,0,2.3-1,2.3-2.2V19.7c0-1.3-1.1-2.3-2.3-2.2h-2.3c-1.3,0-2.3,1-2.3,2.2v16.5 c0,1.3,1.1,2.3,2.3,2.2H34.4z"></path>
                ) : (
                  <path d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>
                )}
              </svg>
            </button>
          </Flex>
        </Flex>
      </div>
    </section>
  );
}
