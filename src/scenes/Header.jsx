import ButtonOutline from "../components/button/ButtonOutline";
import ButtonSolid from "../components/button/ButtonSolid";
import { SmartPhone1, SmartPhone2 } from "../assets";

export default function Header() {
  return (
    <header>
      <div className="relative">
        <div className="md:bg-hero-pattern md:bg-cover h-[550px] w-full absolute z-[-10] md:brightness-[.40] bg-[#FAFAFA]"></div>
        <div className="app-container md:pt-[73px]">
          <h1 className="font-bold text-gray-500 text-center md:text-white">
            Food App
          </h1>
          <h2 className="font-bold text-center text-4xl tracking-[0.2px] mt-[17px] md:text-white md:max-w-[900px] md:mx-auto">
            Why stay hungry when you can order form Bella Onojie
          </h2>
          <p className="text-gray-500 text-center text-2xl mt-[27px] md:text-white">
            Download the bella onoje’s food app now on
          </p>
          <div className="md:flex items-center justify-center gap-5">
            <ButtonSolid
              className={
                "rounded-full block px-16 w-[250px] mx-auto md:mx-0 mt-10"
              }
            >
              Playstore
            </ButtonSolid>
            <ButtonOutline
              className={
                "rounded-full block px-16 w-[250px] mx-auto md:mx-0 mt-5 md:mt-10 md:text-white md:border-white"
              }
            >
              App Store
            </ButtonOutline>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-24 mx-auto max-w-fit md:mt-16">
        <img
          src={SmartPhone1}
          alt="smartphone 1"
          className="translate-x-5 -translate-y-14 w-[200px]"
        />
        <img src={SmartPhone2} alt="smartphone 2" className="w-[190px]" />
      </div>
      <hr className="border-t-2 max-w-[884px] mx-auto hidden md:block mt-[49px]" />
      <p className="font-semibold text-center my-[49px] text-2xl">
        How the app works
      </p>
      <hr className="border-t-2 max-w-[884px] mx-auto md:hidden" />
    </header>
  );
}
