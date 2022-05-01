import React, { useEffect, useReducer, useState } from "react";
import { ethers, utils } from "ethers";
import { shortenAddress } from "../utils/shortenAddress.js";

// import enums
import { contractEnum, web3Enum, tokenEnum, userEnum } from "./enums.js";

// import reducers
import {
  contractReducer,
  web3Reducer,
  userReducer,
  tokenReducer,
} from "./reducers";

import {
  transactionContractAddress,
  transactionContractABI,
  tokenSaleContractAddress,
  tokenSaleContractABI,
  aceTokenContractAddress,
  aceTokenContractABI,
  lotteryPoolContractABI,
  lotteryPoolContractAddress,
  lotteryContractABI,
} from "../utils/constants";

export const ContractsContext = React.createContext();

export const ContractsProvider = ({ children }) => {
  const { ethereum } = window;
  const [isLoading, setIsLoading] = useState(false);
  const [isEther, setIsEther] = useState(false);
  const [isBuyingToken, setIsBuyingToken] = useState(false);
  const [tokenMessage, setTokenMessage] = useState(null);
  const [sendingEther, setSendingEther] = useState(false);
  const [etherMessage, setEtherMessage] = useState(null);
  const [isCreatingLottery, setIsCreatingLottery] = useState(false);
  const [createLotteryMessage, setCreateLotteryMessage] = useState(false);

  const [contracts, dispatchContracts] = useReducer(contractReducer, {
    transactionContract: null,
    aiboostTokenContract: null,
    aiboostTokenSaleContract: null,
    transactions: [],
    transactionCount: +localStorage.getItem("transactionCount"),
    tokenPrice: 0,
    lotteryContract: null,
    lotteryPoolContract: null,
    lotteryManager: "",
    lotteryEntryFee: 0,
    lotteriesDetails: [],
    lotteryTimeRemaining: 0,
    lotteryStart: null,
    lotteryEnter: null,
    lotteryEnd: null,
    lotteryPlayers: [],
    lotteryWinner: null,
    lotteryPrice: 0,
  });

  const [web3, dispatchWeb3] = useReducer(web3Reducer, {
    provider: null,
  });

  const [user, dispatchUser] = useReducer(userReducer, {
    balance: 0,
    currentAccount: null,
  });

  const [token, dispatchToken] = useReducer(tokenReducer, {
    balance: 0,
    price: 0,
    sold: 0,
  });

  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    message: "",
  });

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const createEthereumContract = async () => {
    // const url = "http://localhost:7545";
    const provider = new ethers.providers.Web3Provider(ethereum);

    // ganache
    // const provider = new ethers.providers.JsonRpcProvider(url);
    dispatchWeb3({ type: web3Enum.PROVIDER, value: provider });
    const signer = provider.getSigner();

    const transactionsContract = new ethers.Contract(
      transactionContractAddress,
      transactionContractABI,
      signer
    );

    const tokenSaleContract = new ethers.Contract(
      tokenSaleContractAddress,
      tokenSaleContractABI,
      signer
    );

    const aiboostTokenContract = new ethers.Contract(
      aceTokenContractAddress,
      aceTokenContractABI,
      signer
    );

    const lotteryPoolContract = new ethers.Contract(
      lotteryPoolContractAddress,
      lotteryPoolContractABI,
      signer
    );

    dispatchContracts({
      type: contractEnum.TRANSACTION_CONTRACT_INIT,
      value: transactionsContract,
    });

    dispatchContracts({
      type: contractEnum.TOKEN_CONTRACT_INIT,
      value: aiboostTokenContract,
    });

    dispatchContracts({
      type: contractEnum.SALE_CONTRACT_INIT,
      value: tokenSaleContract,
    });

    dispatchContracts({
      type: contractEnum.LOTTERY_POOL_CONTRACT_INIT,
      value: lotteryPoolContract,
    });

    return {
      aiboostTokenContract,
      tokenSaleContract,
      transactionsContract,
      lotteryPoolContract,
    };
  };

  const getBalanceOf = async (address = user.currentAccount) => {
    let balance = await web3.provider.getBalance(address);
    let formatBalance = ethers.utils.formatEther(balance);
    dispatchUser({
      type: userEnum.BALANCE,
      value: formatBalance.substring(0, 7),
    });
    return formatBalance.substring(0, 7);
  };

  const initToken = async () => {
    try {
      if (
        ethereum &&
        contracts.aiboostTokenSaleContract &&
        contracts.aiboostTokenContract
      ) {
        setIsLoading(true);
        let tokenPrice = await contracts.aiboostTokenSaleContract.tokenPrice();
        let tokenSold = await contracts.aiboostTokenSaleContract.tokenSold();
        let userBalance = await contracts.aiboostTokenContract.balanceOf(
          user.currentAccount
        );

        tokenPrice = ethers.utils.formatEther(tokenPrice);

        dispatchToken({
          type: tokenEnum.BALANCE,
          value: userBalance.toNumber(),
        });
        dispatchToken({ type: tokenEnum.PRICE, value: tokenPrice });
        dispatchToken({ type: tokenEnum.SOLD, value: tokenSold.toNumber() });
        setIsLoading(false);
        setTokenMessage(null);
      } else {
        console.log("contract is not initialized @initToken");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const buyTokens = async (tokens) => {
    console.log("buying tokens for", tokens);
    if (tokens <= 0) {
      console.log("can not buy tokens");
    } else {
      const value = ethers.BigNumber.from(
        ethers.utils.parseEther(token.price).toString()
      ).mul(tokens);
      const transactionHash =
        await contracts.aiboostTokenSaleContract.buyTokens(tokens, {
          from: user.currentAccount,
          value: value,
          gasLimit: 500000,
        });
      setIsBuyingToken(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      console.log(`Success - ${transactionHash.hash}`);
      setTokenMessage(
        `Token buy was successful from account ${shortenAddress(
          user.currentAccount
        )}.`
      );
      setIsBuyingToken(false);
    }
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum && contracts.transactionContract) {
        const availableTransactions =
          await contracts.transactionContract.getTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => {
            return {
              addressTo: transaction.receiver,
              addressFrom: transaction.sender,
              timestamp: new Date(
                +transaction.timestamp * 1000
              ).toLocaleString(),
              message: transaction.message,
              amount: +transaction.amount / 10 ** 18,
            };
          }
        );
        dispatchContracts({
          type: contractEnum.TRANSACTIONS,
          value: structuredTransactions,
        });
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) {
        console.log("No ether found");
      } else {
        setIsEther(true);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        dispatchUser({ type: userEnum.CURR_ACCOUNT, value: accounts[0] });
        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum && contracts.transactionContract) {
        const currentTransactionCount =
          await contracts.transactionContract.transactionCount();

        window.localStorage.setItem(
          "transactionCount",
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert(
          "Please install MetaMask and then connect to your wallet."
        );
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      dispatchUser({ type: userEnum.CURR_ACCOUNT, value: accounts[0] });
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      console.log(contracts);
      if (ethereum && contracts.transactionContract) {
        const { addressTo, amount, message } = formData;
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: user.currentAccount,
              to: addressTo,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });

        const transactionHash =
          await contracts.transactionContract.addTransaction(
            addressTo,
            parsedAmount,
            message
          );

        setIsLoading(true);
        setSendingEther(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setEtherMessage(
          `Sending ethereum was successful from ${shortenAddress(
            user.currentAccount
          )} to ${shortenAddress(addressTo)}.`
        );

        setIsLoading(false);
        setSendingEther(false);
        getBalanceOf();

        const transactionsCount =
          await contracts.transactionContract.transactionCount();

        console.log(`transaction count => ${transactionsCount}`);

        dispatchContracts({
          type: contractEnum.TRANSACTION_COUNT,
          value: +transactionsCount,
        });
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  // lottery pool contract
  const initLotteryPool = async () => {
    try {
      if (ethereum && contracts.lotteryPoolContract) {
        setIsLoading(true);
        // get all lotteries
        const lotteries =
          await contracts.lotteryPoolContract.getLotteryContractDetails();

        // type cast lotteries.
        const lotteriesDetails = lotteries.map((lottery) => ({
          endedTimeStamp: +lottery.endedTimeStamp,
          lotteryContract: lottery.lotteryContract,
          manager: lottery.manager,
        }));

        dispatchContracts({
          type: contractEnum.LOTTERIES_DETAILS,
          value: lotteriesDetails,
        });

        setIsLoading(false);
      } else {
        console.log("contract is not initialized @lottery");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const initLotteryContract = async (lotteryAddress) => {
    try {
      if (ethereum && contracts.lotteryPoolContract) {
        setIsLoading(true);
        const lotteryContract = new ethers.Contract(
          lotteryAddress,
          lotteryContractABI,
          web3.provider.getSigner()
        );

        const lotteryPrice = await lotteryContract.winningPrice();
        const status = await lotteryContract.status();
        console.log("Lottery Status", status);
        const manager = await lotteryContract.manager();
        const winner = await lotteryContract.getWinner();
        const players = await lotteryContract.getPlayers();
        const entryFee = await lotteryContract.entryFee();

        dispatchContracts({
          type: contractEnum.LOTTERY_INIT,
          value: lotteryContract,
        });

        dispatchContracts({
          type: contractEnum.LOTTERY_MANAGER,
          value: manager,
        });

        dispatchContracts({
          type: contractEnum.LOTTERY_ENTRY_FEE,
          value: +entryFee,
        });

        dispatchContracts({
          type: contractEnum.LOTTERY_PLAYERS,
          value: players,
        });

        dispatchContracts({
          type: contractEnum.LOTTERY_WINNER,
          value: winner,
        });

        dispatchContracts({
          type: contractEnum.LOTTERY_PRICE,
          value: +lotteryPrice,
        });

        setIsLoading(false);
      } else {
        console.log("ethereum || contracts.lotteryPoolContract not init");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getLotteryDetails = async (lotteryAddress) => {
    try {
      if (ethereum && contracts.lotteryPoolContract) {
        const lotteryDetail =
          await contracts.lotteryPoolContract.getLotteryContract(
            lotteryAddress
          );
        let local = {
          lotteryAddress: lotteryDetail.lotteryContract,
          endedTimeStamp: +lotteryDetail.endedTimeStamp,
          manager: lotteryDetail.manager,
        };
        return local;
      } else {
        console.log("contract is not initialized @lottery");
      }
    } catch (e) {
      console.error(error);
    }
  };

  const startLottery = async (startTime) => {
    try {
      if (startTime <= 0) {
        console.error(`Cannot Start Lottery with ${startTime} time`);
      } else {
        if (ethereum && contracts.lotteryPoolContract) {
          const start = await contracts.lotteryPoolContract.createLottery(
            startTime
          );
          setIsLoading(true);
          setIsCreatingLottery(true);
          console.log(`Loading - ${start.hash}`);
          await start.wait();
          console.log(`Success - ${start.hash}`);
          setCreateLotteryMessage(
            `Lottery Created Successful by ${shortenAddress(
              user.currentAccount
            )}.`
          );
          // dispatchContracts({ type: contractEnum.LOTTERY_START, value: start });
          setIsLoading(false);
          setIsCreatingLottery(false);
        } else {
          console.log("The lottery has not started yet");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const enterLottery = async () => {
    try {
      if (ethereum && contracts.lotteryContract) {
        setIsLoading(true);
        const enter = await contracts.lotteryContract.enter({
          from: user.currentAccount,
          value: contracts.lotteryEntryFee,
          gasLimit: 500000,
        });
        console.log(`Entering Lottery Plz Wait - ${enter.hash}`);
        await enter.wait();
        console.log(`Entered Lottery Successfully - ${enter.hash}`);
        if (
          !alert(
            `Transaction Confirmed ${enter.hash} \n from: ${user.currentAccount}`
          )
        ) {
          location.reload();
        }
        dispatchContracts({ type: contractEnum.LOTTERY_ENTER, value: enter });
        setIsLoading(false);
      } else {
        console.log("You have not entered the lottery yet");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const endLottery = async () => {
    try {
      if (ethereum && contracts.lotteryContract) {
        setIsLoading(true);
        const end = await contracts.lotteryContract.end();
        console.log(`Ending Lottery Plz Wait - ${end.hash}`);
        await end.wait();
        console.log(`Lottery Ended Successfully - ${end.hash}`);
        if (
          !alert(
            `Transaction Confirmed ${end.hash} \n from: ${user.currentAccount}`
          )
        ) {
          location.reload();
        }
        dispatchContracts({ type: contractEnum.LOTTERY_END, value: end });
        setIsLoading(false);
      } else {
        console.log("Lottery is not initiated or no ether found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const lotteryTimeRemaining = async () => {
    try {
      setIsLoading(true);
      if (ethereum && contracts.lotteryPoolContract) {
        const timeRemaining =
          await contracts.lotteryPoolContract.getRemainingTime();
        console.log("Contract ⌚ Remaining", timeRemaining);
        dispatchContracts({
          type: contractEnum.LOTTERY_TIME_REMAINING,
          value: timeRemaining,
        });
        setIsLoading(false);
      } else {
        console.log("Lottery is not initiated or no ether will be found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (ethereum) {
    useEffect(() => {
      async function init() {
        await checkIfWalletIsConnect();
        await createEthereumContract();
        await checkIfTransactionsExists();
        await initLotteryPool();

        window.ethereum.on("chainChanged", async () => {
          console.log("network changed!!");
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", async () => {
          console.log("accounts changed");
          window.location.reload();
        });
      }
      init();
    }, []);
  }

  return (
    <ContractsContext.Provider
      value={{
        transactionCount: contracts.transactionCount,
        transactions: contracts.transactions,
        currentAccount: user.currentAccount,
        balance: user.balance,
        lotteryManager: contracts.lotteryManager,
        lotteryStatus: contracts.lotteryStatus,
        lotteryEntryFee: contracts.lotteryEntryFee,
        lotteryPlayers: contracts.lotteryPlayers,
        winner: contracts.lotteryWinner,
        lotteryPrice: contracts.lotteryPrice,
        lotteryWinningPrice: contracts.ethPrice,
        lotteriesDetails: contracts.lotteriesDetails,
        // web3
        provider: web3.provider,

        connectWallet,
        sendTransaction,
        etherMessage,
        sendingEther,
        isEther,
        isLoading,
        handleChange,
        formData,
        getBalanceOf,
        getAllTransactions,
        createEthereumContract,
        token,
        initToken,
        tokenMessage,
        buyTokens,

        // lottery
        initLotteryPool,
        initLotteryContract,
        startLottery,
        enterLottery,
        endLottery,
        lotteryTimeRemaining,
        getLotteryDetails,
        createLotteryMessage,
        isCreatingLottery,

        isBuyingToken,
      }}
    >
      {children}
    </ContractsContext.Provider>
  );
};
