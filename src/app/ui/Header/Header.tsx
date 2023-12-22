import Logo from "./Logo";
import Email from "./Email";
import InstaButton from "./InstaButton";
import LogoMobile from "./LogoMobile";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="mx-4 my-8 flex justify-between lg:mx-20">
      <span className="hidden lg:flex">
        <Logo />
      </span>
      <span className="flex lg:hidden">
        <LogoMobile />
      </span>
      <nav className="hidden items-center gap-30 pl-125 pr-16 text-base text-white lg:flex">
        <a href="#projects">Our Projects</a>
        <a href="#services">Our Services</a>
        <a href="#reviews">Reviews</a>
        <a href="#consultation">Consultation</a>
        <a href="#contact">Contact</a>
      </nav>
      <span className="flex">
        <div className="hidden items-center  lg:mr-[30px] lg:flex lg:gap-30">
          <InstaButton />
          <a className="" href="#consultation">
            <Email />
          </a>
        </div>
        <Hamburger />
        <a
          href="#contact"
          className="h-[57px] w-[142px] rounded-mid bg-btn px-[10px] pt-[16px] text-center text-base text-white"
        >
          Get In Touch
        </a>
      </span>
    </header>
  );
};

export default Header;
