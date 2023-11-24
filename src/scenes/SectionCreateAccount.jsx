import Heading from "../components/Heading";
import { UlLogin } from "../assets";

export default function SectionCreateAccount() {
  return (
    <section className="app-container-sm md:flex items-center justify-between flex-row-reverse gap-10">
      <Heading
        title={"Create/login to an existing account to get started"}
        subtitle={"Create an account"}
        description={
          "An account is created with your email and a desired password"
        }
      />
      <img
        src={UlLogin}
        alt="ul login"
        className="object-contain max-w-[300px] mx-auto mt-16 md:max-w-[250px]"
      />
    </section>
  );
}
