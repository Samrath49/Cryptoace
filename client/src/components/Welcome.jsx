import { Tri } from "../Icons";
import Diamond from "../../assets/images/diamond.png";

const Welcome = () => {
  const scrollTo = () => {
    const getStarted = document.getElementById("getStarted");
    getStarted.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  function parallax(event) {
    document.querySelectorAll(".plx").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      shift.style.transition = `transform 0.25s`;
    });
  }

  return (
    <>
      <section>
        <div className="bg-mainBg select-none" onMouseMove={parallax}>
          <div className="container relative flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
            <h1 className="text-5xl z-10 text-textBg font-rubik leading-none sm:text-7xl xl:max-w-3xl">
              Enter the world of internet economies.
            </h1>

            <p className="mt-6 mb-8 z-10 font-raj text-slate-300 text-lg sm:mb-12 xl:max-w-3xl">
              Send cryptos across the world and track your every transaction
              with cryptoace.
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                onClick={scrollTo}
                className="flex mx-auto z-10 mt-12 py-1 px-4 font-raj  mb-10 font-semibold text-lg text-slate-300 border-2 border-btnBorder rounded-xl hover:border-btnHover shadow-btnHover shadow-3xl focus:outline-btnHover "
              >
                Get started
              </button>
            </div>
            <div
              className="absolute top-16 plx -left-80 md:-left-24 lg:left-20  bg-blend-color-burn"
              value="1"
            >
              <Tri />
            </div>

            <div className="absolute w-[500px] -right-80 md:-right-24 lg:right-40 top-40">
              <img src={Diamond} value="-1" className="plx" alt="" />
            </div>

            <div className="absolute w-[500px] h-[500px] -left-[450px] sm:-left-96 top-10 gradient-bg-ball rounded-full blur-3xl animate-blob animation-delay-2000 opacity-30"></div>
            <div className="absolute w-[200px] h-[200px] -left-[500px] sm:-left-48 top-48 gradient-bg-ball rounded-full blur-3xl animation-delay-2000 animate-blob"></div>
            <div className="absolute w-[500px] h-[500px] -right-[450px] sm:-right-96 top-72 gradient-bg-ball1 rounded-full blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute w-[200px] h-[200px] -right-[500px] sm:-right-56 top-[450px] gradient-bg-ball1 rounded-full blur-3xl animate-blob"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
