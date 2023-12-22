"use client";
import { type Slide } from "@/app/types/types";
import { ActiveDot, InactiveDot } from "./Dot";
import { slides } from "@/app/lib/data";
import Image from "next/image";
import Swipi from "swipi";
import { useMedia } from "@/app/hooks/useMedia";

const Carousel = ({}: {}) => {
  const { matches } = useMedia("(max-width: 730px)");

  const space = (matches as boolean) ? 0 : 31;

  const settings = {
    initialSlide: 0,
    spaceBetweenSlides: 31,
    slidesNumber: 4,
    showDots: true,
    customDot: <InactiveDot />,
    customActiveDot: <ActiveDot />,
  };

  return (
    <section className="flex max-w-[1279px] flex-col lg:mx-20">
      <Swipi
        {...settings}
        config={[
          {
            spaceBetween: space,
            maxWidth: 430,
            slidesNumber: (matches as boolean) ? 1 : 4,
          },
        ]}
      >
        {slides.map((slide: Slide, idx: number) => {
          return (
            <section key={idx}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={matches ? 397 : 300}
                height={300}
              />
            </section>
          );
        })}
      </Swipi>
    </section>
  );
};

export default Carousel;
