const Card = ({
  title,
  productDescription,
  color,
}: {
  title: string;
  productDescription: string;
  color: string;
}) => {
  return (
    <section className="card-sm relative flex max-h-full  w-[210px] flex-col flex-wrap overflow-hidden bg-white px-[10px] pb-[14px] lg:w-[238px] lg:pl-3 lg:pr-5">
      <span
        className={`absolute ${color} -left-[30px] h-[26px] w-[149px] -rotate-45`}
      ></span>
      <p className="mb-[21px] mt-100x text-left text-[22px] font-bold text-black">
        {title}
      </p>
      <article className="text-xs font-normal text-black lg:text-sm">
        {productDescription}
      </article>
    </section>
  );
};

export default Card;
