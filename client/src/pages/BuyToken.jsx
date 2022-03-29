import React, { useEffect, useRef } from "react";
import Notification from "../components/Notification";

const error = true;

const BuyToken = () => {
  const inputRef = useRef();

  return (
    <section className="flex-1 p-4 space-y-10 bg-[#000000e5]">
      {/* first div */}
      <div className="container mx-auto bg-neutral-900 p-6 my-4 shadow-lg border border-slate-700 rounded-lg max-w-lg text-slate-200">
        <h2 className="text-xl antialiased font-medium">Ace Token</h2>
        <h3 className="pt-5 pb-2 text-slate-300 antialiased text-md">
          Token Price (ACE) :{" "}
          <span className="text-teal-500 font-medium">0.01</span>
        </h3>
        <h3 className="pb-2 text-slate-300 antialiased text-md">
          Tokens Owned : <span className="text-teal-500 font-medium">0</span>
        </h3>
        <h3 className="pb-2 text-slate-300 antialiased text-md">
          Total Tokens Sold :{" "}
          <span className="text-teal-500 font-medium">0 / 1000000</span>
        </h3>
      </div>

      {/* second div */}
      <div className="container mx-auto bg-neutral-900 p-4 my-4 shadow-lg border border-slate-700 rounded-lg max-w-lg text-slate-300">
        {true && true ? (
          <>
            <h2 className="text-xl antialiased font-medium">Ace Token</h2>
            <form>
              <span className="text-xs text-teal-500 antialiased tracking-widest font-normal">
                Please be patient as it can take a while.
              </span>
              <input
                ref={inputRef}
                placeholder="No. of Tokens"
                name="tokens"
                type="number"
                min="1"
                pattern="[0-9]"
                step="0.0001"
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />
              <button
                type="button"
                disabled={!true || false || false}
                onClick={() => {}}
                className="w-full mt-2 bean disabled:cursor-not-allowed"
              >
                {true ? "BUY ACE TOKEN" : "⚠️ No Account Found"}
              </button>
            </form>
          </>
        ) : (
          <div className="bg-zinc-900 flex-1 items-center py-4 flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500" />
          </div>
        )}
      </div>
      <Notification
        props={{
          type: 1,
          message: "Token buy was successful",
        }}
      />
    </section>
  );
};

export default BuyToken;
