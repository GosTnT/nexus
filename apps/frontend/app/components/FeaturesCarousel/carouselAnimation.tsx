import video from "@/images/large.mp4";
import { Flex } from "@radix-ui/themes";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useRef } from "react";
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
  ];
  const options: EmblaOptionsType = { align: "start", direction: "ltr" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

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

  const videoRefs = useRef<Record<number, HTMLVideoElement>>({});
  function toggleVideo(video: any) {
    const videoElement = videoRefs.current[video.id];

    if (videoElement && videoElement.paused) {
      videoElement.play();
    } else if (videoElement) {
      videoElement.pause();
    }
  }

  return (
    <section className="embla" dir="ltr">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videoContent.map((video) => (
            <div className="embla__slide" key={video.id}>
              <div className="embla__slide__number">
                <video
                  ref={(element) => {
                    // Armazena a referência para cada elemento de vídeo na matriz de referências
                    if (element) {
                      videoRefs.current[video.id] = element;
                    }
                  }}
                  autoPlay
                  onClick={() => toggleVideo(video)}
                  src={video.video}
                ></video>
              </div>
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
              onClick={() => {
                console.log(emblaApi?.slidesInView);
              }}
              className="absolute -right-14  bg-[#f5f5f7] toggleVideoButton w-[38px] h-[38px] rounded-full"
            >
              <svg viewBox="0 0 56 56">
                <path d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>
              </svg>
            </button>
          </Flex>
        </Flex>
      </div>
    </section>
  );
}
