import { useState, useEffect, useContext, useRef } from "react";
import { Notification, Loader } from "../components";
import { Link } from "react-router-dom";
import { ContractsContext } from "../context/ContractsContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Eth, Arrow } from "../Icons";

const LotteryPool = () => {
  const inputRef = useRef();
  const [time, setTime] = useState();
  const [showEnded, setShowEnded] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const [blockTimeStamp, setBlockTimeStamp] = useState(0);
  const [showActiveLottery, setShowActiveLottery] = useState(false);
  const [showMoreEndedLottery, setShowMoreEndedLottery] = useState(false);

  const {
    isEther,
    isLoading,
    balance,
    getBalanceOf,
    currentAccount,
    lotteriesDetails,
    initLotteryPool,
    startLottery,
    provider,
    isCreatingLottery,
    createLotteryMessage,
  } = useContext(ContractsContext);

  async function getBalance(address = currentAccount) {
    if (!address) {
      return;
    }
    await getBalanceOf(address);
  }

  console.log(lotteriesDetails);

  const toggle = (id) => {
    if (id == 1) {
      setShowActiveLottery(!showActiveLottery);
    }
    if (id == 2) {
      setShowEnded(!showEnded);
    }
  };

  const showMore = () => {
    setShowMoreEndedLottery(!showMoreEndedLottery);
  };

  const checkTime = (e) => {
    if (
      (e.target.value > 0 && e.target.value % 1 == 0) ||
      e.target.value === ""
    ) {
      setTime(e.target.value * 60);
      setInputErr(false);
    } else {
      setInputErr(true);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  useEffect(() => {
    initLotteryPool();
    if (provider) {
      provider.getBlock().then((block) => {
        setBlockTimeStamp(() => +block.timestamp);
      });
    }
  }, [blockTimeStamp]);

  const getRemainingTime = (timestamp) => {
    return Math.floor((timestamp - blockTimeStamp) / 60);
  };

  return (
    <section className="flex-1 p-2 lg:p-10 md:p-4 bg-neutral-900">
      {/* first div */}
      <div className="mx-auto bg-slateBg lg:bg-lottery md:bg-lottery text-textBg p-2 lg:p-4 md:p-4 my-4 lg:my-7 md:my-7 shadow-md rounded-3xl max-w-lg animate-fade-in-up hover:shadow-2xl">
        <div className="flex justify-between">
          <h2 className="text-slate-300 text-xl ml-2 pb-2 lg:pb-[10px] md:pb-[10px] antialiased select-none font-rubik">
            Enter Lottery
          </h2>
          {currentAccount && (
            <div className="flex">
              <p className="text-slate-400 font-rubik">{balance}</p>
              <Eth />
            </div>
          )}
        </div>

        {/* For active lotteries */}
        {currentAccount ? (
          <div className="bg-neutral-900 p-4 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:border-[1px] select-none animate-fade-in-down hover:border-borderBg">
            <div className="flex justify-between" onClick={() => toggle(1)}>
              <h3 className="pt-0 pb-0 text-btnText font-raj font-semibold antialiased text-lg">
                Ongoing Lotteries{" "}
              </h3>
              <div
                className={`${
                  showActiveLottery
                    ? "rotate-180 transition delay-300 ease-in-out"
                    : "animate-wiggle"
                }`}
              >
                <button onClick={toggle}>
                  <Arrow />
                </button>
              </div>
            </div>

            {lotteriesDetails.length > 0 &&
              !isLoading &&
              lotteriesDetails.map((lottery, index) => {
                if (index > 25) {
                  return;
                }
                if (+getRemainingTime(lottery.endedTimeStamp) > 0) {
                  return (
                    <Link
                      to={`/lottery/${lottery.lotteryContract}`}
                      key={lottery.lotteryContract}
                    >
                      {showActiveLottery && (
                        <div className="p-2 mt-2 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:border-[1px] select-none animate-fade-in-down hover:border-[#431981]">
                          <div className="flex justify-between">
                            <h3 className="pt-0 pb-0 text-btnText font-raj font-semibold antialiased text-lg">
                              Lottery{" "}
                              <span className="text-btnHover">
                                #{index + 1}
                              </span>
                            </h3>
                            <h5 className="pt-1 text-btnText font-raj font-semibold">
                              Ending In:{" "}
                              <span className="text-btnHover">
                                {getRemainingTime(lottery.endedTimeStamp) +
                                  "min"}
                              </span>
                            </h5>
                          </div>
                          <h3 className="pt-0 text-btnText font-raj font-semibold text-lg">
                            Address :{" "}
                            <p className="inline-flex text-btnHover font-raj font-semibold">
                              {shortenAddress(lottery.lotteryContract)}
                            </p>
                          </h3>
                        </div>
                      )}
                    </Link>
                  );
                }
              })}
          </div>
        ) : (
          <div className="bg-neutral-900 p-4 rounded-2xl border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:border-[1px] select-none animate-fade-in-down hover:border-red-900">
            <h3 className="pt-0 pb-0 text-gray-400 font-raj font-semibold antialiased text-lg">
              Connect your wallet to enter
            </h3>
          </div>
        )}

        {/* For ended Lotteries  */}
        {currentAccount && (
          <div className="bg-neutral-900 p-4 mt-3 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:border-[1px] select-none animate-fade-in-down hover:border-borderBg">
            <div className="flex justify-between" onClick={() => toggle(2)}>
              <h3 className="pt-0 pb-0 text-btnText font-raj font-semibold antialiased text-lg">
                Ended Lotteries{" "}
              </h3>
              <div
                className={`${
                  showEnded
                    ? "rotate-180 transition delay-300 ease-in-out"
                    : "animate-wiggle"
                }`}
              >
                <button onClick={toggle}>
                  <Arrow />
                </button>
              </div>
            </div>
            {lotteriesDetails.length > 0 &&
              !isLoading &&
              lotteriesDetails.map((lottery, index) => {
                if (index > 3 && !showMoreEndedLottery) {
                  return;
                }
                if (+getRemainingTime(lottery.endedTimeStamp) < 0) {
                  return (
                    <Link
                      to={`/lottery/${lottery.lotteryContract}`}
                      key={lottery.lotteryContract}
                    >
                      {showEnded && (
                        <div className="p-2 mt-2 rounded-2xl border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:border-[1px] select-none animate-fade-in-down hover:border-[#5e140b]">
                          <div className="flex justify-between">
                            <h3 className="pt-0 pb-0 text-gray-500 font-raj font-semibold antialiased text-lg">
                              Lottery{" "}
                              <span className="text-rose-900">
                                #{index + 1}
                              </span>
                            </h3>
                            <h5 className="pt-1 text-gray-500 font-raj font-semibold">
                              Ended :
                              <span className="text-rose-900">
                                {getRemainingTime(lottery.endedTimeStamp)}
                              </span>
                            </h5>
                          </div>
                          <h3 className="pt-0 text-gray-500 font-raj font-semibold text-lg">
                            Address :{" "}
                            <p className="inline-flex text-rose-900 font-raj font-semibold">
                              {shortenAddress(lottery.lotteryContract)}
                            </p>
                          </h3>
                        </div>
                      )}
                    </Link>
                  );
                }
              })}
            {showEnded && (
              <button
                className=" mt-4 border-2 border-btnHover rounded-lg px-2 py-2 w-full font-semibold text-slate-300 hover:border-btnBorder"
                onClick={() => showMore()}
              >
                {showMoreEndedLottery ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        )}

        {/* Input Field */}
        {!false ? (
          <div
            className={`mx-auto bg-neutral-900 mt-3 p-2 pt-0 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] ${
              inputErr
                ? "border-red-700 "
                : "border-[#2c3849] hover:border-borderBg"
            }   animate-fade-in-down`}
          >
            <form className="flex">
              {time ? (
                <p className="text-center mt-4 w-full h-full text-lg rounded-xl animate-fade-in-up">
                  Ending in: {time + "sec"}
                </p>
              ) : (
                ""
              )}
              <input
                ref={inputRef}
                placeholder="Lottery end time in minutes"
                name="time"
                type="number"
                min="1"
                pattern="[0-9]"
                onChange={checkTime}
                step="1"
                className="w-full rounded-xl p-2 mt-2 outline-none bg-transparent text-slate-100 border-none text-lg font-raj font-semibold"
              />
            </form>
          </div>
        ) : (
          ""
        )}

        <button
          type="button"
          disabled={
            !currentAccount || isLoading || time <= 0 || inputErr || !time
          }
          onClick={() => {
            startLottery(+inputRef.current.value);
          }}
          className="w-full h-14 mt-3 font-raj font-semibold text-lg text-slate-300 border-2 border-btnHover rounded-xl hover:border-btnBorder disabled:cursor-not-allowed"
        >
          {isCreatingLottery && <Loader />}
          {isCreatingLottery
            ? "Loading..."
            : currentAccount
            ? "CREATE LOTTERY"
            : "NO WALLET FOUND"}
        </button>
      </div>

      {!isEther ? (
        <Notification
          props={{
            type: 3,
            message: "Install MetaMask Wallet",
            timerValue: 3000,
          }}
        />
      ) : !currentAccount ? (
        <Notification
          props={{ type: 2, message: "Connect your wallet", timerValue: 3000 }}
        />
      ) : (
        isCreatingLottery && (
          <Notification
            props={{
              type: 2,
              message: "Please wait. The lottery will be created soon.",
              timerValue: 3000,
            }}
          />
        )
      )}

      {typeof createLotteryMessage === "string" && (
        <Notification
          props={{
            type: 1,
            message: createLotteryMessage,
            timerValue: 120000,
          }}
        />
      )}
    </section>
  );
};

export default LotteryPool;
