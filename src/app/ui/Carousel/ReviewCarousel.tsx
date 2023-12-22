"use client";

import Swipi from "swipi";
import { reviews } from "@/app/lib/data";
import PrevButton from "../components/PrevButton";
import NextButton from "../components/NextButton";

const ReviewCarousel = () => {
  return (
    <section className="max-w-full">
      <Swipi
        showArrows
        initialSlide={0}
        slidesNumber={1}
        prevButton={<PrevButton />}
        loop
        nextButton={<NextButton />}
        config={[{ maxWidth: 800, slidesNumber: 1, spaceBetween: 0 }]}
      >
        {reviews.map(({ review, reviewer }, idx: number) => {
          return (
            <div className="flex flex-col items-center" key={idx}>
              <p className="text-center font-semibold text-black md:text-[22px] lg:text-[42px]">
                {review}
              </p>
              <p className="text-black md:text-lg lg:text-[34px]">{reviewer}</p>
            </div>
          );
        })}
      </Swipi>
    </section>
  );
};

export default ReviewCarousel;
