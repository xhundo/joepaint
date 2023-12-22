import { reviews } from "@/app/lib/data";
import Carousel from "../Carousel/Carousel";

const Project = () => {
  return (
    <section className="min-h-full max-w-full bg-white px-8" id="projects">
      <h2 className="mb-[30px] pt-[62px] text-center text-2xl font-semibold text-primary md:self-start md:text-left lg:mb-[50px] lg:ml-20 lg:pt-[99px] lg:text-left lg:text-5xl">
        Our Projects
      </h2>
      <Carousel />
    </section>
  );
};

export default Project;
