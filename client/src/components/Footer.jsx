import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col border-t border-slate-400/5 drop-shadow-2xl p-4 bg-[#000000e5]">
      <div className="w-full flex sm:flex-row animate-fade-in-down  flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <Link
            to={"/"}
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={Logo} alt="" />
            <span className="text-3xl font-rajdhaniSemibold tracking-wider text-white">
              Crypto
              <span className="text-logo-gradient">ace</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-1 justify-evenly items-center antialiased text-slate-300 text-2xl uppercase flex-wrap sm:mt-0 mt-5 w-full">
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
          <p className="text-slate-200 text-center py-2 text-sm lg:text-left lg:text-base md:text-left md:text-base">
            © 2021 - 2022, All rights reserved
          </p>

          <div className="flex items-center mt-1 py-2 space-x-5 justify-center">
            <a
              target="_blank"
              href="https://twitter.com/chauhansamrath"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-[#963DFF] duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/samrath49/"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-[#963DFF] duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              target="_blank"
              href="https://github.com/samrath49"
              className="transition ease-in-out delay-120 text-slate-200 hover:-translate-y-1 hover:scale-125 hover:text-[#963DFF] duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          <div className="text-center text-sm py-2 lg:text-right lg:text-base md:text-right md:text-base">
            <p className=" text-slate-200">
              Made with ❤️ by {""}
              <a
                target="_blank"
                href="https://github.com/samrath49"
                className="font-rajdhaniSemibold tracking-wide hoverEffect"
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
