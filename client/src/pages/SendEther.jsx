import React, { useState, useRef } from "react";
import Notification from "../components/Notification";

const SendEther = () => {
  const inputRef = useRef();
  const [cost, setCost] = useState();

  const getCost = (e) => {
    setCost(e.target.value * 0.01);
  };
  return (
    <>
      <section className="flex-1 p-2 lg:p-10 md:p-4 bg-neutral-900">
        {/* first div */}
        <div className="mx-auto bg-slateBg lg:bg-buytoken md:bg-buytoken text-textBg p-2 lg:p-4 md:p-4 my-4 lg:my-7 md:my-7 shadow-md rounded-3xl max-w-lg group animate-fade-in-up hover:shadow-xl">
          <div className="flex justify-between">
            <h2 className="text-slate-300 text-xl ml-2 pb-2 lg:pb-[10px] md:pb-[10px] antialiased select-none font-rubik">
              Send Ether
            </h2>
          </div>

          <div className="bg-neutral-900 p-4 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:drop-shadow-md hover:border-[1px] select-none animate-fade-in-down hover:border-borderBg">
            <h3 className="pt-0 pb-2 text-btnText antialiased text-lg">
              Token Price :{" "}
              <span className="text-purple-700 font-rajdhaniSemibold text-lg">
                0.01
              </span>
            </h3>
            <h3 className="pb-2 text-btnText antialiased text-lg">
              Tokens Owned :{" "}
              <span className="text-purple-700 font-rajdhaniSemibold text-lg">
                0
              </span>
            </h3>
            <h3 className="text-btnText antialiased text-lg">
              Total Tokens Sold :{" "}
              <span className="text-purple-700 font-rajdhaniSemibold text-lg">
                0
              </span>
            </h3>
          </div>

          <div className="mx-auto bg-neutral-900 mt-3 p-2 pt-0 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:drop-shadow-md hover:border-[1px] animate-fade-in-down hover:border-borderBg">
            <form className="flex">
              {cost ? (
                <p className="text-center mt-4 w-full h-full text-lg rounded-xl animate-fade-in-up">
                  ETH: {cost}
                </p>
              ) : (
                ""
              )}
              <input
                ref={inputRef}
                placeholder="No. of tokens"
                name="tokens"
                type="number"
                min="1"
                pattern="[0-9]"
                onChange={getCost}
                step="1"
                className="w-full rounded-xl p-2 mt-2 outline-none bg-transparent text-white border-none text-lg font-rajdhaniSemibold white-glassmorphism"
              />
            </form>
          </div>

          <button
            type="button"
            disabled={!true || false || false}
            onClick={() => {}}
            className="w-full h-14 mt-3 font-rajdhaniSemibold text-lg text-slate-300 border-2 border-btnHover rounded-xl hover:border-btnBorder disabled:cursor-not-allowed"
          >
            {true ? "BUY ACE TOKEN" : "⚠️ No Account Found"}
          </button>

          {/* Button: 
                ~~ IF not connected say connect to wallet and add functionality 
                ~~ IF connected say buy token 
                ~~ IF entered token value is less give div border red 
                ~~ IF buying then display loader on button and disable the input fields */}

          {/* <button
            disabled
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              role="status"
              class="inline mr-3 w-4 h-4 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
          <button
            disabled
            type="button"
            class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            <svg
              role="status"
              class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
            Loading...
          </button> */}
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
