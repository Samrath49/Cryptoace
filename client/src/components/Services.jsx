import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Services() {
  const cardData = [
    {
      title: "Buy Ace Token",
      img: "bg-buytoken",
      link: "/buy-token",
      description:
        "A safe secure crypto token offered from Cryptoace for your own use. Buy a token using ropsten ethereum.",
    },
    {
      title: "Play Lottery Game",
      img: "bg-lottery",
      link: "/lottery",
      description:
        "Play a game of crypto lottery to get a chance of winning ethereum. Create your own lottery and play with friends.",
    },
    {
      title: "Send Ether",
      img: "bg-sendEther",
      link: "/send-ether",
      description:
        "Make ethereum transactions across the world. A safe, secure and easy way to help you send ethereum to anyone.",
    },
  ];

  return (
    <section>
      <div className="relative py-16 bg-mainBg">
        <h2 className="mx-auto max-w-md pt-6 mb-6 font-rubik text-center font-extrabold tracking-wide text-3xl text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg">
          Crypto{" "}
          <span className="inline-block text-logo-gradient">Services.</span>
        </h2>
        <div className="relative container m-auto pt-2 lg:pt-10 px-6 text-slate-400 md:px-12">
          <div className="grid lg:grid-cols-3 gap-6 md:w-8/12 md:mx-auto lg:w-full">
            {cardData.map((card, index) => (
              <Fragment key={index}>
                <div
                  className={`group ${card.img} z-10 bg-slateBg bg-opacity-50 rounded-xl shadow-xl px-4 sm:px-8 py-6 sm:py-12 space-y-6 text-center bg-blend-color`}
                >
                  <h3 className="text-2xl font-semibold text-textBg">
                    {card.title}
                  </h3>
                  <p>{card.description}</p>
                  <Link
                    to={card.link}
                    className="relative flex justify-center items-center h-10 w-10 mx-auto 
                  before:absolute before:border-btnHover before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125 group-hover:before:border-btnBorder"
                  >
                    <span className="text-slate-300 text-lg">&#8594;</span>
                  </Link>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="absolute w-[250px] h-[250px] -right-[1px] sm:-right-1 lg:top-1 md:top-[500px] sm:top-96  gradient-bg-ball rounded-full blur-3xl animate-blob animation-delay-2000 opacity-20 sm:opacity-30"></div>
          <div className="absolute w-[250px] h-[250px] -left-[1px] sm:-left-[40px] top-16 gradient-bg-ball1 rounded-full blur-3xl opacity-20 sm:opacity-30 animate-blob"></div>
        </div>
      </div>
    </section>
  );
}

export default Services;