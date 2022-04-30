import { useContext, useEffect, useState } from "react";
import { Notification, Loader } from "../components";
import { ContractsContext } from "../context/ContractsContext";
import { shortenAddress } from "../utils/shortenAddress";
import { useParams } from "react-router";
import { Eth } from "../Icons";

function Lottery() {
  const { lotteryAddress } = useParams();

  const {
    initLotteryContract,
    lotteryManager,
    lotteryEntryFee,
    lotteryPlayers,
    balance,
    getBalanceOf,
    lotteryPrice,
    isLoading,
    lotteryStatus,
    enterLottery,
    lotteryTimeRemaining,
    isEther,
    currentAccount,
  } = useContext(ContractsContext);

  const [state, setState] = useState({
    lotteryManager: null,
    lotteryEntryFee: 0,
    lotteryPlayers: [],
    lotteryWinner: null,
    lotteryPrice: 0,
  });

  const [manager, setIsManager] = useState(false);

  useEffect(() => {
    if (
      currentAccount === lotteryManager.toLowerCase() &&
      (currentAccount || lotteryManager.toLowerCase() !== null)
    ) {
      setIsManager(true);
    }
  });

  async function getBalance(address = currentAccount) {
    if (!address) {
      return;
    }
    await getBalanceOf(address);
  }

  // console.log("Lottery", lottery);

  useEffect(() => {
    async function load() {
      await initLotteryContract(lotteryAddress);

      setState(() => {
        return {
          ...state,
          lotteryManager,
          lotteryEntryFee,
          lotteryPlayers,
          lotteryPrice,
        };
      });
    }

    load();
    getBalance();
  }, []);

  console.log("Lottery Things🔫");

  return (
    <section className="flex-1 p-2 lg:p-10 md:p-4 bg-neutral-900">
      {/* first div */}
      <div className="mx-auto bg-slateBg lg:bg-lottery md:bg-lottery text-textBg p-2 lg:p-4 md:p-4 my-4 lg:my-7 md:my-7 shadow-md rounded-3xl max-w-lg animate-fade-in-up hover:shadow-2xl">
        <div className="flex justify-between">
          <h2 className="text-slate-300 text-xl ml-2 pb-2 lg:pb-[10px] md:pb-[10px] antialiased select-none font-rubik">
            Lottery Details
          </h2>
          {currentAccount && (
            <div className="flex">
              <p className="text-slate-400 font-rubik">{balance}</p>
              <Eth />
            </div>
          )}
        </div>

        <div className="bg-neutral-900 p-4 font-raj font-medium rounded-2xl text-btnText border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:border-[1px] select-none animate-fade-in-down hover:border-borderBg">
          <h3 className="pt-0 pb-2 antialiased text-lg">
            Lottery Contract :{" "}
            <a
              className="text-purple-700 font-semibold text-lg hover:text-btnBorder"
              href={`https://ropsten.etherscan.io/address/${lotteryAddress}`}
              rel="noreferrer"
              target="_blank"
            >
              {shortenAddress(lotteryAddress)}
            </a>
          </h3>
          <h3 className="pb-2 antialiased text-lg">
            Lottery Manager :{" "}
            <a
              className="text-purple-700 font-semibold text-lg hover:text-btnBorder"
              href={`https://ropsten.etherscan.io/address/${lotteryManager}`}
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              {manager
                ? "You are the lottery manager"
                : shortenAddress(lotteryManager)}
            </a>
          </h3>
          <h3 className="pb-2 antialiased text-lg">
            Lottery Status :{" "}
            <span className="text-purple-700 font-semibold text-lg hover:text-btnBorder">
              {" "}
              {`Lottery has ended`}
            </span>
          </h3>
        </div>

        <button
          type="button"
          disabled={!currentAccount || isLoading}
          onClick={() => {}}
          className="w-full h-14 mt-3 font-raj font-semibold text-lg text-slate-300 border-2 border-btnHover rounded-xl hover:border-btnBorder disabled:cursor-not-allowed"
        >
          {false && <Loader />}
          {false
            ? "Loading..."
            : currentAccount
            ? "LOTTERY GAME"
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
        false && (
          <Notification
            props={{
              type: 2,
              message: "Please wait. The transaction might take some time",
              timerValue: 3000,
            }}
          />
        )
      )}
      {/* TODO: Lottery Message */}
    </section>
  );
}

export default Lottery;
