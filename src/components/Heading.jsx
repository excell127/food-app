export default function Heading({
  subtitle,
  title,
  subtitleDesktop,
  description,
}) {
  return (
    <div className="text-center md:text-start md:max-w-max">
      {subtitleDesktop ? (
        <>
          <h2 className="text-orange-600 text-2xl font-bold md:hidden">
            {subtitle}
          </h2>
          <h2 className="text-orange-600 text-2xl font-bold md:block hidden">
            {subtitleDesktop}
          </h2>
        </>
      ) : (
        <h2 className="text-orange-600 text-2xl font-bold">{subtitle}</h2>
      )}

      <h2 className="text-[40px] font-bold mt-10 md:mt-4 leading-[57px] max-w-[327px] mx-auto md:mx-0 md:max-w-[560px]">
        {title}
      </h2>
      <p className="text-2xl text-gray-500 font-medium mt-[50px] max-w-[257px] mx-auto md:mt-[27px] md:mx-0 md:max-w-[560px]">
        {description}
      </p>
    </div>
  );
}
