import React, { useRef } from "react";
import Notification from "../components/Notification";

const SendEther = () => {
  const inputRef = useRef();

  return (
    <>
      <section className="flex-1 p-8 space-y-10 bg-[#000000e5]">
        {/* first div */}
        <div className="container mx-auto bg-slate-800 backdrop-blur-xl p-5 max-w-lg rounded-xl">
        <div className="absolute font-rajdhaniSemibold text-slate-300 text-lg top-1 left-7">
          <p>Send Ether</p>
        </div>
          <div className="container mx-auto bg-neutral-900 p-4 my-4 shadow-lg border border-slate-700 rounded-lg max-w-lg text-slate-200">
            <h2 className="text-xl antialiased font-medium">Send Ether</h2>
            <h3 className="pt-5 pb-2 text-slate-300 antialiased text-md">
              Token Price (ACE) :{" "}
              <span className="text-teal-500 font-medium">0.01</span>
            </h3>
            <h3 className="pb-2 text-slate-300 antialiased text-md">
              Tokens Owned :{" "}
              <span className="text-teal-500 font-medium">0</span>
            </h3>
            <h3 className="pb-2 text-slate-300 antialiased text-md">
              Total Tokens Sold :{" "}
              <span className="text-teal-500 font-medium">0 / 1000000</span>
            </h3>
          </div>
        </div>
      </section>
      <Notification
        props={{
          type: 2,
          message: "Opps can't send ether",
        }}
      />
    </>
  );
};

export default SendEther;
