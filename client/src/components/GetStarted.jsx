import { Fragment } from "react";
import { Arrow } from "../Icons";
import Wallet from "../../assets/images/wallet.png";
import Secure from "../../assets/images/secure.png";
import Wifi from "../../assets/images/wifi.png";
import Link from "../../assets/images/link.png";

function GetStarted() {
  const stepsData = [
    {
      title: "Connect your metamask wallet.",
      description: "Login to your metamask wallet connect to Cryptoace.",
      url: "https://metamask.io/faqs/",
      img: Wallet,
    },
    {
      title: "Switch to ropsten test network.",
      description:
        "Not a commercial web3 project hence contracts are deployed on ropsten test network.",
      url: "http://www.herongyang.com/Ethereum/MetaMask-Extension-Add-Ropsten-Test-Network.html",
      img: Wifi,
    },
    {
      title: "Connect your account.",
      description:
        "Connect any of your account by clicking on connect button on metamask wallet.",
      url: "https://archenetwork.medium.com/how-to-use-ropsten-with-metamask-and-connect-with-arche-v1-1-eros-48be365b4e04/",
      img: Link,
    },
  ];

  return (
    <section className="bg-mainBg text-gray-300" id="getStarted">
      <div className="px-4 py-10 mx-auto font-rubik sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2  mb-4">
          <div className="pt-2 lg:pt-7">
            <h2 className="font-rubik text-center sm:inline-block pb-3 font-extrabold tracking-wide text-3xl sm:text-4xl mt-4 sm:mt-7 text-gray-300 sm:leading-none">
              Safe <span className="text-logo-gradient">& </span>
              Secured
            </h2>
            <p className="font-raj text-center lg:text-left tracking-wider pt-2">
              Every transaction made from Cryptoace is safe and secured. You can
              also track any of your transactions on the metamask wallet and
              also on ehterscan.
              <span className="hidden lg:block">
                All the transactions on cryptoace works transparently and hence
                follows the web3 rules.
              </span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div>
              <img
                src={Secure}
                className="w-28 h-28 sm:w-60 sm:h-60 secure-shadow"
                alt="Security"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Get Started Section  */}
      <h2 className="mx-auto max-w-md pt-10 lg:mb-10 font-rubik text-center font-extrabold tracking-wide text-3xl text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg">
        Get <span className="inline-block text-logo-gradient">Started.</span>
      </h2>
      <div className="container px-5 py-10 mx-auto">
        {stepsData.map((data, index) => (
          <Fragment key={index}>
            <div
              className={
                index > 1
                  ? "flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col"
                  : "flex items-center lg:w-3/5 mx-auto border-b pb-5 mb-5 sm:pb-10 sm:mb-10 border-gray-700 sm:flex-row flex-col"
              }
            >
              {" "}
              {index != 1 ? (
                <>
                  <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="flex-grow sm:text-left text-center mt-1 sm:mt-0">
                    <h2 className="text-slate-200 text-lg font-semibold sm:mb-2">
                      {data.title}
                    </h2>
                    <p className="hidden sm:block text-base">
                      {data.description}
                    </p>
                    <a
                      target="_blank"
                      href={data.url}
                      className="sm:mt-3 inline-flex items-center font-medium group text-[#a75bff] select-none cursor-pointer"
                    >
                      Learn More{" "}
                      <div className="-rotate-90 text-btnBorder transition ease-in delay-75 group-hover:translate-x-1 group-hover:scale-110">
                        <Arrow />
                      </div>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-grow sm:text-left text-center mt-1 sm:mt-0">
                    <h2 className="text-slate-200 text-lg font-semibold sm:mb-2">
                      {data.title}
                    </h2>
                    <p className="hidden sm:block text-base">
                      {data.description}
                    </p>
                    <a
                      target={"_blank"}
                      href={data.url}
                      className="sm:mt-3 inline-flex items-center font-medium group text-[#a75bff] select-none cursor-pointer"
                    >
                      Learn More{" "}
                      <div className="-rotate-90 text-btnBorder transition ease-in delay-75 group-hover:translate-x-1 group-hover:scale-110">
                        <Arrow />
                      </div>
                    </a>
                  </div>
                  <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center flex-shrink-0">
                    <img src={data.img} alt="" />
                  </div>
                </>
              )}
            </div>
          </Fragment>
        ))}

        <button
          type="button"
          className="flex mx-auto mt-12 py-1 px-4 font-raj  mb-10 font-semibold text-lg text-slate-300 border-2 border-btnBorder rounded-xl hover:border-btnHover shadow-btnHover shadow-3xl focus:outline-btnHover "
        >
          <a
            target="_blank"
            href="https://ropsten.oregonctf.org/eth"
            rel="no-follow"
          >
            Get ropsten ethereum{" "}
          </a>
        </button>
      </div>
    </section>
  );
}

export default GetStarted;
