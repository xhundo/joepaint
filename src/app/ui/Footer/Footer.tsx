import InstaButton from "../Header/InstaButton";
import Email from "../Header/Email";

export default function Footer() {
  return (
    <footer
      className="mx-23px flex justify-center pb-[26px] pt-[37px] md:gap-x-[305px] md:px-[41px] lg:gap-x-[591px] lg:px-20 lg:pb-[89px] lg:pt-[125px]"
      id="contact"
    >
      <section className="footer-sm flex flex-col gap-y-[24px] lg:gap-y-12">
        <h2 className="text-[13px] font-bold text-white md:text-2xl lg:text-5xl">
          Contact
        </h2>
        <section className="max-w-[547px]">
          <article className="article-sm mb-5 max-w-[282px] text-left text-xs md:font-normal lg:max-w-full lg:text-lg">
            Transform your space with a fresh coat of paint! Contact Joe&apos;s
            Painting today for top-notch interior and exterior painting, stucco
            services, and pressure cleaning. Let us bring new life to your home
            or business. Get in touch now!
          </article>
          <p className="contact-sm text-lg font-semibold lg:text-2xl">
            (407)-421-5895
          </p>
          <p className="contact-sm text-lg font-semibold lg:text-2xl">
            Joes Painting, Inc.
          </p>
        </section>
      </section>
      <section className="flex flex-col gap-y-[15px] self-end md:h-[57px] md:w-[73px] lg:h-[112px] lg:w-[142px] lg:gap-x-[30px] lg:gap-y-[30px]">
        <div className="flex justify-end gap-x-[15px] lg:gap-x-[30px]">
          <InstaButton />
          <a href="#consultation">
            <Email />
          </a>
        </div>
        <a
          href="#contact"
          className="btn-sm w-[85px] bg-btn  text-center font-semibold text-white md:h-[35px]  md:rounded-[51px]  md:p-[6px] md:text-[10px] lg:h-[56px] lg:w-[142px] lg:rounded-mid lg:p-[12px] lg:text-lg"
        >
          Get In Touch
        </a>
      </section>
    </footer>
  );
}
