import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { Twitter, Github, LinkedIn } from "../Icons";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col border-t border-slate-400/5 drop-shadow-2xl p-4 bg-mainBg">
      <div className="w-full flex sm:flex-row animate-fade-in-down  flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <Link
            to={"/"}
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={Logo} alt="CryptoAce Logo" />
            <span className="text-3xl font-raj font-semibold tracking-wider text-white">
              Crypto
              <span className="text-logo-gradient">ace</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-1 justify-evenly items-center antialiased text-slate-300 font-medium md:text-2xl lg:text-2xl uppercase flex-wrap sm:mt-0 mt-5 w-full">
          <div className="flex">
            <Link
              to={"/buy-token"}
              aria-label="Buy Token"
              title="Buy Token"
              className="tracking-wide hoverEffect"
            >
              Buy Token
            </Link>
          </div>

          <div className="flex">
            <Link
              to={"/lottery"}
              aria-label="Lottery"
              title="Lottery"
              className="tracking-wide hoverEffect"
            >
              Lottery
            </Link>
          </div>

          <div className="flex">
            <Link
              to={"/send-ether"}
              aria-label="Send Ether"
              title="Send Ether"
              className="tracking-wide hoverEffect"
            >
              Send Ether
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:w-[90%] h-[1px] animate-fade-in-down w-full bg-slate-400/40 mt-5"></div>

      <div className="sm:w-[90%] w-full flex justify-between animate-fade-in-down items-center mt-3">
        <div className="w-full grid grid-cols-1 py-5 px-10 text-xl lg:grid-cols-3 md:grid-cols-3">
          <p className="text-slate-200 text-center font-medium py-2 text-sm lg:text-left lg:text-base md:text-left md:text-base">
            © 2021 - 2022, All rights reserved
          </p>

          <div className="flex items-center mt-1 py-2 space-x-5 justify-center">
            <a
              target="_blank"
              href="https://twitter.com/chauhansamrath"
              title="Twitter"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
            >
              <Twitter />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/samrath49/"
              title="Linkedin"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
            >
              <LinkedIn />
            </a>

            <a
              target="_blank"
              href="https://github.com/samrath49"
              title="Github"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
            >
              <Github />
            </a>
          </div>

          <div className="text-center text-sm py-2 lg:text-right lg:text-base md:text-right md:text-base">
            <p className=" text-slate-200 font-medium">
              Made with ❤️ by {""}
              <a
                target="_blank"
                href="https://github.com/samrath49"
                className="font-raj font-semibold tracking-wide hoverEffect"
              >
                Samrath Chauhan
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
