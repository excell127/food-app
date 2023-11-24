import ButtonOutline from "../components/button/ButtonOutline";
import ButtonSolid from "../components/button/ButtonSolid";
import { Twitter, Facebook, Linkedin } from "feather-icons-react";
import { Logo } from "../assets";

export default function Footer() {
  return (
    <footer>
      <header className="relative">
        <div className="bg-[#252B42] md:bg-footer-pattern h-full w-full absolute brightness-75 bg-cover z-[-1] bg-center"></div>
        <div className="py-[110px] px-[24px]">
          <div>
            <h3 className="text-white text-[40px] font-bold text-center max-w-[310px] mx-auto mb-[20px] md:max-w-none">
              Download the app now.
            </h3>
            <p className="text-[#BDBDBD] text-2xl font-medium text-center max-w-[245px] mx-auto md:max-w-none md:hidden">
              Most calendars are designed for teams.
            </p>
            <p className="text-white text-2xl font-medium text-center mx-auto md:block hidden">
              Available on your favorite store. Start your premium experience
              now
            </p>
          </div>
          <div className="flex gap-3 mt-[60px] justify-center">
            <ButtonSolid className={"rounded-lg px-[31px] py-[18px]"}>
              Buy now
            </ButtonSolid>
            <ButtonOutline
              className={
                "rounded-lg text-white border-white px-[45px] py-[16px]"
              }
            >
              Try For Free
            </ButtonOutline>
          </div>
        </div>
      </header>
      <section className="pb-[45px] pt-[60px] md:flex items-center justify-around">
        <img src={Logo} alt="" className="max-w-[100px] hidden md:block" />
        <div className="flex items-center justify-center gap-[24px] mb-2">
          <Twitter
            fill="#FA4A0C"
            stroke="none"
            className="cursor-pointer w-10 h-10 md:w-7 md:h-7"
          />
          <Facebook
            fill="white"
            stroke="none"
            className="bg-[#FA4A0C] rounded-sm cursor-pointer w-10 h-10 md:w-7 md:h-7"
          />
          <Linkedin
            fill="white"
            stroke="none"
            className="bg-[#FA4A0C] rounded-sm cursor-pointer w-10 h-10 md:w-7 md:h-7"
          />
        </div>
        <p className="text-center text-xs font-bold text-[#5C5C5C] md:hidden">
          Just type what's on your mind and we'll
        </p>
        <p className="text-xs font-bold text-[#5C5C5C] hidden md:block">
          Copywright 2020 Bella Onojie.com
        </p>
      </section>
    </footer>
  );
}
