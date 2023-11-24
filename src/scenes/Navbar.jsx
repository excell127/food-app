import { useState } from "react";
import { Logo } from "../assets";
import { Menu } from "feather-icons-react";

class Link {
  display = "";
  href = "";
  isActive = false;

  constructor(display, href, isActive) {
    this.display = display;
    this.href = href;
    this.isActive = isActive ? isActive : this.isActive;
  }
}

export default function Navbar() {
  const LINKS = [
    new Link("Home", "/", true),
    new Link("Product", "/product"),
    new Link("Faq", "/faq"),
    new Link("Contact", "/contact"),
  ];

  const [isShow, setIsShow] = useState(false);

  return (
    <header className="flex items-center justify-between px-3 py-5 md:px-[2rem] md:py-[28px] relative z-50">
      <div className="max-w-[8rem] md:max-w-[10rem]">
        <img src={Logo} alt="Logo" className="w-full h-full" />
      </div>

      <Menu
        className="md:hidden"
        onClick={() => setIsShow((value) => !value)}
      />

      {/* desktop navbar */}
      <nav className="md:flex hidden items-center gap-16">
        {LINKS.map((link, i) => (
          <a
            className={`font-semibold ${
              link.isActive ? "text-orange-500" : "text-[#252B42]"
            }`}
            key={i}
            href={link.href}
          >
            {link.display}
          </a>
        ))}
      </nav>

      {/* mobile navbar */}
      <nav
        className={`md:hidden flex items-center gap-3 absolute flex-col top-12 right-1 bg-white shadow-lg rounded-2xl p-5 transition-all duration-300 ${
          isShow
            ? "scale-100 translate-y-7 translate-x-0 opacity-100"
            : "scale-0 -translate-y-1/2 translate-x-7 opacity-0"
        }`}
      >
        {LINKS.map((link, i) => (
          <a className="font-semibold" key={i} href={link.href}>
            {link.display}
          </a>
        ))}
      </nav>
    </header>
  );
}
