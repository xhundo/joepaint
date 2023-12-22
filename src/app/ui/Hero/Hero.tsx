import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-4 md:px-8 md:pb-[57px] md:leading-[30px] lg:mx-20 lg:mb-[53px] lg:justify-center lg:gap-70 lg:px-0 lg:pb-0">
      <section className="flex flex-col lg:flex-row">
        <nav className="mb-8 flex flex-col gap-y-4 text-center font-semibold lg:hidden">
          <a href="#projects">Our Projects</a>
          <a href="#services">Our Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#consultation">Consultation</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="mb-3 max-w-[288px] text-center text-xl font-bold md:hidden">
          Transform Your Space with Joe&apos;s Painting: Experts in Interior and
          Exterior Painting
        </p>
        <section className="hidden gap-x-4 md:flex">
          <span className="max-w-full">
            <Image
              src="/interior-painting.jpg"
              width={654}
              height={400}
              objectFit="fill"
              alt="Interior Painting"
              priority
            />
          </span>
          <article className="hidden flex-col md:flex md:gap-[29px] lg:flex lg:gap-10">
            <h1 className="max-w-[547px] md:text-[28px] lg:text-5xl">
              Transform Your Space with Joe&apos;s Painting: Experts in Interior
              and Exterior Painting
            </h1>
            <p className="max-w-[547px] md:text-sm lg:text-2xl">
              Transform your space with a fresh coat of paint! Get a free quote
              from Joe&apos;s Painting today and discover why we&apos;ve been
              the trusted choice for 25 years. Don&apos;t wait, book now!
            </p>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Hero;
