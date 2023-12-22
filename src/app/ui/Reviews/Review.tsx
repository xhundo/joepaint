import ReviewCarousel from "../Carousel/ReviewCarousel";

const Reviews = () => {
  return (
    <section
      className="reviews flex flex-col items-center bg-white px-4 pb-[60px] pt-[50px] lg:p-[100px] lg:pt-[102px]"
      id="reviews"
    >
      <h2 className="mb-[27px] self-center text-2xl font-semibold text-primary lg:mb-[115px] lg:text-5xl">
        What Our Clients Say
      </h2>
      <ReviewCarousel />
    </section>
  );
};

export default Reviews;
