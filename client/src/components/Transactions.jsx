import React, { useContext, useEffect } from "react";
import { ContractsContext } from "../context/ContractsContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Eth } from "../Icons";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
}) => {
  const dateArr = timestamp.split(" ");
  const meridiem = dateArr[2];
  const timeArr = dateArr[1].split(":");
  timeArr.pop();
  const time = timeArr.join(":");

  const tranDate = new Date(timestamp);
  const date = tranDate.getDate();
  const strDate = tranDate.toString();
  const month = strDate.slice(4, 7).toUpperCase();

  let bigMessage = false;
  let smallMessage = "";
  if (message.length > 130) {
    bigMessage = true;
    smallMessage = message.split(" ").slice(0, 1).join(" ");
  }

  return (
    <>
      {
        <div className="px-4 py-2 flex-1 mx-auto sm:max-w-xl md:max-w-full md:px-0 lg:max-w-xl lg:px-8 lg:py-26">
          <div className="grid gap-5 lg:grid-cols-1 md:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-auto">
            <div className="bg-neutral-900 p-8 transaction-shadow ease-in-out delay-100 duration-75 rounded-xl group hover:drop-shadow-lg">
              <div className="grid gap-8 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="flex">
                  <div className="pt-1 mr-6 text-center">
                    <div className="px-2 pb-1 mb-1 border-b border-gray-600">
                      <p className=" text-slate-300">{month}</p>
                    </div>
                    <div className="px-2">
                      <p className="text-lg text-slate-300 font-raj font-semibold">
                        {date}
                      </p>
                    </div>

                    <div className="pt-20 bottom w-full">
                      <div className="flex pb-1 mb-1">
                        <p className="text-lg text-slate-300 font-raj font-semibold pb-1 border-b border-gray-600">
                          {time}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-300 mr-4">{meridiem}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative border-slate-700 duration-300 border-l-4 rounded-full right-3 group-hover:scale-105 group-hover:border-[#4d1f81]" />
                  <div>
                    <div className="mb-2">
                      <a
                        href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm tracking-wide uppercase text-slate-300"
                      >
                        From
                      </a>
                    </div>
                    <div className="mb-5">
                      <a
                        href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="inline-block text-base font-semibold leading-5 text-slate-300">
                          {shortenAddress(addressFrom)}
                        </p>
                      </a>
                    </div>
                    <p className=" flex flex-1 gap-1 text-btnBorder font-raj font-semibold text-lg">
                      {amount}
                      <Eth />
                    </p>
                    {message && (
                      <>
                        <p className="mt-2 mb-2 text-justify text-slate-300 text-base font-semibold leading-5">
                          {bigMessage
                            ? smallMessage + " ...Read More"
                            : message}
                        </p>
                      </>
                    )}
                    <div className="flex items-center">
                      <div className="mb-2">
                        <a
                          href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs tracking-wide uppercase text-slate-300"
                        >
                          <p
                            className={
                              message
                                ? `pt-2 text-sm tracking-wide uppercase text-slate-300`
                                : `pt-11 text-sm tracking-wide uppercase text-slate-300`
                            }
                          >
                            To
                          </p>
                        </a>
                        <a
                          href={`https://ropsten.etherscan.io/address/${addressTo}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold leading-[45px] text-slate-300"
                        >
                          {shortenAddress(addressTo)}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

const Transaction = () => {
  const { transactions, currentAccount, getAllTransactions } =
    useContext(ContractsContext);

  useEffect(() => {
    getAllTransactions();
  }, []);

  if (transactions.length > 4) {
    for (let i = 0; i < transactions.length - 3; i++) {
      transactions.shift();
    }
  }
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 bg-mainBg">
      {currentAccount ? (
        <div className="flex flex-col md:p-12 py-12 px-4">
          <h2 className="mx-auto max-w-md mb-6 font-rubik font-extrabold tracking-wide text-3xl text-gray-300 sm:text-4xl sm:leading-none xl:max-w-lg">
            Latest{" "}
            <span className="inline-block text-logo-gradient">
              Transactions.
            </span>
          </h2>

          <div className="flex flex-wrap justify-center items-center mt-10">
            {transactions.map((transaction, i) => (
              <TransactionsCard key={i} {...transaction} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Transaction;
