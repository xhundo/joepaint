import { EstimateForm } from "../components/EstimateForm";
const Consultations = () => {
  return (
    <section className="flex flex-col items-center bg-white " id="consultation">
      <h2 className="text-2xl font-semibold text-primary lg:text-5xl">
        Consultation
      </h2>
      <p className="mb-[31px] mt-[21px] max-w-full px-14 text-center text-xs font-normal text-black lg:mb-[22px]  lg:mt-[30px] lg:max-w-[1062px]  lg:text-2xl lg:leading-[30px]">
        Ready to elevate your space? Secure top-notch, reliable painting
        services for your home or office like never before! Seize the chance to
        enhance your surroundings. Don&apos;t wait—book your next painting
        project now!
      </p>
      <EstimateForm />
    </section>
  );
};

export default Consultations;
