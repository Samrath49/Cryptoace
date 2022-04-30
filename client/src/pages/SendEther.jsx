import { useState, useEffect, useContext } from "react";
import { Notification, Loader } from "../components";
import { ContractsContext } from "../context/ContractsContext";
import { Eth } from "../Icons";

const Input = ({
  placeholder,
  name,
  type,
  value,
  checkValue,
  handleChange,
}) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => {
      checkValue(e, name);
      handleChange(e, name);
    }}
    className="w-full rounded-xl p-2 mt-2 outline-none bg-transparent text-slate-100 border-none text-lg font-raj font-semibold"
  />
);

const SendEther = () => {
  const {
    isEther,
    isLoading,
    formData,
    sendTransaction,
    handleChange,
    balance,
    getBalanceOf,
    currentAccount,
    etherMessage,
    sendingEther,
  } = useContext(ContractsContext);

  const [amountErr, setAmountErr] = useState(false);
  const [addressErr, setAddressErr] = useState(false);
  const [noInput, setNotInput] = useState(true);

  const checkValue = (e, type) => {
    // Amount Validation
    if (type === "amount") {
      if (e.target.value > 0 || e.target.value === "") {
        setAmountErr(false);
      } else {
        setAmountErr(true);
      }
    }

    // Address Validation
    if (type === "addressTo") {
      console.log(typeof e.target.value);
      function isHex(num) {
        return Boolean(num.match(/^0x[0-9a-f]+$/i));
      }
      if (e.target.value.length == 42 || e.target.value === "") {
        if (isHex(e.target.value) || e.target.value === "") {
          setAddressErr(false);
        }
      } else {
        setAddressErr(true);
      }
    }

    // No validation needed for message as it is just text
    if (e.target.value.length || !e.target.value === "") {
      setNotInput(false);
    } else {
      setNotInput(true);
    }
  };

  function handleSubmit(e) {
    {
      isLoading && <Loader />;
    }
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  }

  async function getBalance(address = currentAccount) {
    if (!address) {
      return;
    }
    await getBalanceOf(address);
  }
  useEffect(() => {
    getBalance();
  },[]);

  return (
    <section className="flex-1 p-2 lg:p-10 md:p-4 bg-neutral-900">
      <div className="mx-auto bg-slateBg lg:bg-sendEther md:bg-sendEther text-textBg p-2 lg:p-4 md:p-4 my-4 lg:my-7 md:my-7 shadow-md rounded-3xl max-w-lg animate-fade-in-up hover:shadow-2xl">
        <div className="flex justify-between">
          <h2 className="text-slate-300 text-xl ml-2 pb-2 lg:pb-[10px] md:pb-[10px] antialiased select-none font-rubik">
            Send Ether
          </h2>
          {currentAccount && (
            <div className="flex">
              <p className="text-slate-400 font-rubik">{balance}</p>
              <Eth />
            </div>
          )}
        </div>

        {/* Enter Ether */}
        <div
          className={`mx-auto bg-neutral-900 mt-0 p-2 pt-0 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] ${
            amountErr
              ? "border-red-700 "
              : "border-[#2c3849] hover:border-borderBg"
          }   animate-fade-in-down`}
        >
          <form className="flex">
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              checkValue={checkValue}
              handleChange={handleChange}
            />
          </form>
        </div>

        {/* Enter Address */}
        <div
          className={`mx-auto bg-neutral-900 mt-3 p-2 pt-0 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] ${
            addressErr
              ? "border-red-700 "
              : "border-[#2c3849] hover:border-borderBg"
          }   animate-fade-in-down`}
        >
          <form className="flex">
            <Input
              placeholder="Account Address"
              name="addressTo"
              type="text"
              checkValue={checkValue}
              handleChange={handleChange}
            />
          </form>
        </div>

        {/* Enter Message */}
        <div
          className={`mx-auto bg-neutral-900 mt-3 p-2 pt-0 rounded-2xl text-slate-200 border-[1px] transition ease-in-out delay-[2ms] border-[#2c3849] hover:border-borderBg  animate-fade-in-down`}
        >
          <form className="flex">
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              checkValue={checkValue}
              handleChange={handleChange}
            />
          </form>
        </div>

        <button
          type="button"
          disabled={
            !currentAccount ||
            !isEther ||
            isLoading ||
            amountErr ||
            sendingEther ||
            noInput ||
            addressErr
          }
          onClick={handleSubmit}
          className="w-full h-14 mt-3 font-raj font-semibold text-lg text-slate-300 border-2 border-btnHover rounded-xl hover:border-btnBorder disabled:cursor-not-allowed"
        >
          {sendingEther && <Loader />}
          {sendingEther
            ? "Loading..."
            : currentAccount
            ? "SEND ETHER"
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
        sendingEther && (
          <Notification
            props={{
              type: 2,
              message: "Sending ehter. Please wait.",
              timerValue: 3000,
            }}
          />
        )
      )}

      {typeof etherMessage === "string" && (
        <Notification
          props={{
            type: 1,
            message: etherMessage,
            timerValue: 7000,
          }}
        />
      )}
    </section>
  );
};

export default SendEther;
