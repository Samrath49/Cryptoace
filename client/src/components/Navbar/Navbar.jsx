import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { shortenAddress } from "../../utils/shortenAddress";
import { ContractsContext } from "../../context/ContractsContext";
import Logo from "../../../assets/images/logo.svg";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { currentAccount, connectWallet } = useContext(ContractsContext);

  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-mainBg  w-full border-b top-0 border-slate-400/5 z-20 shadow-lg text-2xl">
      <div className="px-4 py-5 mx-auto animate-fade-in-up sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to={"/"}
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={Logo} alt="CryptoAce" />
            <span className="text-3xl font-raj font-semibold tracking-wider text-white">
              Crypto
              <span className="text-logo-gradient">ace</span>
            </span>
          </Link>

          {/* Navigation Buttons */}

          <ul className="hidden mf:flex font-medium items-center text-slate-300 uppercase space-x-8">
            <li>
              <Link
                to={"/buy-token"}
                aria-label="Buy Token"
                title="Buy Token"
                className="tracking-wide hoverEffect"
              >
                Buy Token
              </Link>
            </li>
            <li>
              <Link
                to={"/lottery"}
                aria-label="Lottery"
                title="Lottery"
                className="tracking-wide hoverEffect"
              >
                Lottery
              </Link>
            </li>
            <li>
              <Link
                to={"/send-ether"}
                aria-label="send ether"
                title="send ether"
                className="tracking-wide hoverEffect"
              >
                Send Ether
              </Link>
            </li>
          </ul>

          {/* Button */}

          <ul className="hidden mf:flex items-center space-x-8">
            <li>
              {!currentAccount && (
                <>
                  <button
                    type="button"
                    onClick={connectWallet}
                    className="inline-flex items-center justify-center h-12 px-6 border-2 text-btnText font-semibold rounded-full border-btnBorder bg-transparent transition-all ease-linear delay-75 group hover:cursor-pointer hover:text-slate-200 hover:border-btnHover"
                  >
                    Connect Wallet
                  </button>
                  {/* <button type="button" onClick={connectWallet}>
                    <a class="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-2 font-medium text-btnText shadow-xl transition duration-300 ease-out">
                      <span class="absolute inset-0 h-full w-full bg-gradient-to-br from-btnBorder via-neutral-800 to-btnBorder"></span>
                      <span class="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-20 rotate-45 transform rounded-full bg-btnHover opacity-30 transition duration-500 group-hover:rotate-90"></span>
                      <span class="relative text-white">Connect Wallet</span>
                    </a>
                  </button> */}
                </>
              )}
              {currentAccount && (
                <>
                  <a
                    href={`https://ropsten.etherscan.io/address/${currentAccount}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-12 px-6 border-2 rounded-full border-btnBorder bg-transparent transition-all ease-linear delay-75 group hover:cursor-pointer hover:border-btnHover"
                    >
                      <p className="text-btnText font-raj font-semibold uppercase transition-all ease-linear delay-75 group-hover:text-slate-200">
                        {shortenAddress(currentAccount)}
                      </p>
                    </button>
                  </a>
                </>
              )}
            </li>
          </ul>

          {/* Toggler */}

          <div className="absolute right-6 mf:hidden top-[5px] scale-150">
            <button
              className={isMenuOpen ? "menu opened" : "menu"}
              onClick={showMenu}
              aria-label="Main Menu"
            >
              <svg width="30" height="30" viewBox="0 -16 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MenuItem
        showMenu={showMenu}
        active={isMenuOpen}
        currentAccount={currentAccount}
      />
    </div>
  );
};

export default Navbar;
