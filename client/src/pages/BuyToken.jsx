import { useState, useEffect, useContext, useRef } from "react";
import { Notification, Loader } from "../components";
import { ContractsContext } from "../context/ContractsContext";
import { Eth } from "../Icons";

const BuyToken = () => {
  const inputRef = useRef();
  const [cost, setCost] = useState();
  const [inputErr, setInputErr] = useState(false);

  const {
    initToken,
    token,
    buyTokens,
    isBuyingToken,
    isEther,
    isLoading,
    balance,
    getBalanceOf,
    currentAccount,
    tokenMessage,
  } = useContext(ContractsContext);

  async function getBalance(address = currentAccount) {
    if (!address) {
      return;
    }
    await getBalanceOf(address);
  }
  useEffect(() => {
    initToken();
    getBalance();
  }, []);

  const getCost = (e) => {
    if (
      (e.target.value > 0 && e.target.value % 1 == 0) ||
      e.target.value === ""
    ) {
      setCost(e.target.value * 0.01);
      setInputErr(false);
    } else {
      setInputErr(true);
    }
  };

  return (
    <section className="flex-1 p-2 lg:p-10 md:p-4 bg-neutral-900">
      {/* first div */}
      <div className="mx-auto bg-slateBg lg:bg-buytoken md:bg-buytoken text-textBg p-2 lg:p-4 md:p-4 my-4 lg:my-7 md:my-7 shadow-md rounded-3xl max-w-lg animate-fade-in-up hover:shadow-2xl">
        <div className="flex justify-between">
          <h2 className="text-slate-300 text-xl ml-2 pb-2 lg:pb-[10px] md:pb-[10px] antialiased select-none font-rubik">
            Ace Token
          </h2>
          {currentAccount && (
            <div className="flex">
              <p className="text-slate-400 font-rubik">{balance}</p>
              <Eth />
            </div>
          )}
        </div>

        <div className="bg-neutral-900 p-4 rounded-2xl font-raj font-medium text-slate-300 border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849]  hover:border-[1px] select-none animate-fade-in-down hover:border-borderBg">
          <h3 className="pt-0 pb-2 antialiased text-lg">
            Token Price :{" "}
            <span className="text-purple-700 font-semibold text-lg">
              {token.price}
            </span>
          </h3>
          <h3 className="pb-2 antialiased text-lg">
            Tokens Owned :{" "}
            <span className="text-purple-700 font-semibold text-lg">
              {token.balance}
            </span>
          </h3>
          <h3 className="antialiased text-lg">
            Total Tokens Sold :{" "}
            <span className="text-purple-700 font-semibold text-lg">
              {token.sold}
            </span>
          </h3>
        </div>

        {!isBuyingToken ? (
          <div
            className={`mx-auto bg-neutral-900 mt-3 p-2 pt-0 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] ${
              inputErr
                ? "border-red-700 "
                : "border-[#2c3849] hover:border-borderBg"
            }   animate-fade-in-down`}
          >
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
                className="w-full rounded-xl p-2 mt-2 outline-none bg-transparent text-slate-200 border-none text-lg font-raj font-semibold"
              />
            </form>
          </div>
        ) : (
          ""
        )}

        <button
          type="button"
          disabled={
            !currentAccount ||
            isBuyingToken ||
            isLoading ||
            cost <= 0 ||
            inputErr ||
            !cost
          }
          onClick={() => {
            buyTokens(+inputRef.current.value);
          }}
          className="w-full h-14 mt-3 font-raj font-semibold text-lg text-slate-300 border-2 border-btnHover rounded-xl hover:border-btnBorder disabled:cursor-not-allowed"
        >
          {isBuyingToken && <Loader />}
          {isBuyingToken
            ? "Loading..."
            : currentAccount
            ? "BUY ACE TOKEN"
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
        isBuyingToken && (
          <Notification
            props={{
              type: 2,
              message: "Please wait. The transaction might take some time",
              timerValue: 3000,
            }}
          />
        )
      )}

      {typeof tokenMessage === "string" && (
        <Notification
          props={{
            type: 1,
            message: tokenMessage,
            timerValue: 12000,
          }}
        />
      )}
    </section>
  );
};

export default BuyToken;
