import { services } from "@/app/lib/data";
import Card from "./Card";

const Services = () => {
  return (
    <section
      className="service-sm flex flex-col px-[41px] md:gap-y-8 md:py-14 lg:gap-y-0 lg:px-20 lg:pb-20"
      id="services"
    >
      <h2 className="text-center text-2xl  font-semibold  md:text-left lg:mb-100x lg:mt-[85px] lg:text-left lg:text-5xl">
        Our Services
      </h2>
      <section className="card-section flex flex-wrap justify-center gap-x-[19px] md:justify-start md:gap-y-[25px]  lg:justify-start lg:gap-x-5 lg:gap-y-[30px]">
        {services.map(({ title, text, color }, idx: number) => {
          return (
            <Card
              key={idx}
              title={title}
              productDescription={text}
              color={color}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Services;
