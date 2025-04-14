import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to learn more about the  <span className="text-purple">moon!</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get involved with LunaSCOPE!
        </p>
        <a href="https://lunascope.org">
          <MagicButton
            title="Return to main website"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          LunaSCOPE
        </p>

      </div>
    </footer>
  );
};

export default Footer;