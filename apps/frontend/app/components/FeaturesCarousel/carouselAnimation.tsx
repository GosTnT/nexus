import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState, useRef } from "react";
import { DotButton, useDotButton } from "./carouselDots";
import video from "@/images/large.mp4";
import { Button } from "../ui/button";

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
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
