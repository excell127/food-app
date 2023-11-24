import Heading from "../components/Heading";
import { Payment } from "../assets";

export default function SectionCheckout() {
  return (
    <section className="app-container-sm md:flex items-center justify-between flex-row-reverse gap-10 mb-10">
      <Heading
        title={"When you done check out and get it delivered."}
        subtitle={"Checkout"}
        description={"When you done check out and get it delivered with ease."}
      />
      <img
        src={Payment}
        alt="Payment"
        className="object-contain max-w-[300px] mx-auto mt-16 md:max-w-[250px]"
      />
    </section>
  );
}
