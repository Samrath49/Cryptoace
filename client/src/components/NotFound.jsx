import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex-1 p-2 lg:p-10 md:p-4 bg-mainBg">
      <div className="px-10 sm:px-40 py-14 sm:py-20 rounded-md">
        <div className="flex flex-col items-center">
          <h1 className="font-rubik text-logo-gradient text-9xl animate-fade-in-up">
            404
          </h1>

          <div className="animate-fade-in-down">
            <h6 className="mb-2 text-xl font-bold text-center text-slate-300 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-textBg md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
          </div>
          <Link
            to="/"
            className="flex mx-auto mt-12 py-1 px-4 mb-10 font-semibold text-center text-lg text-slate-300 border-2 border-btnBorder rounded-xl hover:border-btnHover shadow-btnHover shadow-2xl focus:outline-btnHover animate-fade-in-down"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
