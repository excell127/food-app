import Heading from "../components/Heading";
import { Home } from "../assets";

export default function SectionExploring() {
  return (
    <section className="app-container-sm md:flex items-center justify-between gap-10">
      <Heading
        title={"Shop for your favorites meal as e dey hot."}
        subtitle={"Explore while shopping"}
        subtitleDesktop={"Explore varieties"}
        description={
          "Shop for your favorite meals or drinks and enjoy while doing it."
        }
      />
      <img
        src={Home}
        alt="Home"
        loading="lazy"
        className="object-contain max-w-[300px] mx-auto mt-16 md:max-w-[250px]"
      />
    </section>
  );
}
