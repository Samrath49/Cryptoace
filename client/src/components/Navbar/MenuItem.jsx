import React from "react";
import { Link } from "react-router-dom";
import { shortenAddress } from "../../utils/shortenAddress";

const MenuItem = ({ showMenu, active, currentAccount }) => {
  return (
    <menu
      className={
        active
          ? "flex-col flex items-center z-30 fixed right-0 left-0 bottom-0 top-0  uppercase bg-black/50 backdrop-blur-xl animate-fade-in-down gap-8 justify-center pb-8 mf:hidden"
          : // "flex-col flex items-center z-30 fixed right-0 left-0 bottom-0 top-0  uppercase bg-blr-filter gap-8 justify-center pb-8 mf:hidden"
            "hidden"
      }
    >
      <button
        className={active ? "menu opened" : "menu"}
        onClick={showMenu}
        aria-label="Main Menu"
      >
        <svg width="30" height="30" viewBox="0 0 100 100">
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
      <li>
        <Link
          to={"/buy-token"}
          onClick={showMenu}
          aria-label="Buy Token"
          title="Buy Token"
          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
        >
          Buy Token
        </Link>
      </li>
      <li>
        <Link
          to={"/lottery"}
          onClick={showMenu}
          aria-label="Lottery"
          title="Lottery"
          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
        >
          Lottery
        </Link>
      </li>
      <li>
        <Link
          to={"/send-ether"}
          onClick={showMenu}
          aria-label="send ether"
          title="send ether"
          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
        >
          Send Ether
        </Link>
      </li>

      <ul className={active ? "items-center space-x-8" : "hidden"}>
        <li>
          {!currentAccount && (
            <button
              type="button"
              // onClick={connectWallet}
              className="inline-flex items-center justify-center h-12 px-6 border-2 rounded-full border-btnBorder bg-transparent transition-all ease-linear delay-75 group hover:cursor-pointer hover:border-btnHover focus:border-btnHover"
            >
              <p className="text-btnText font-raj font-semibold transition-all ease-linear delay-75 group-hover:text-slate-200">
                Connect Wallet
              </p>
            </button>
          )}
          {currentAccount && (
            <button
              type="button"
              className="inline-flex items-center uppercase justify-center h-12 px-6 border-2 rounded-full border-btnBorder bg-transparent transition-all ease-linear delay-75 group hover:cursor-pointer hover:border-btnHover"
            >
              <p className="text-btnText font-raj font-semibold transition-all ease-linear delay-75 group-hover:text-slate-200">
                <a
                  href={`https://ropsten.etherscan.io/address/${currentAccount}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {shortenAddress(currentAccount)}
                </a>
              </p>
            </button>
          )}
        </li>
      </ul>
    </menu>
  );
};

export default MenuItem;

// background-color: #ffffff;
// background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
