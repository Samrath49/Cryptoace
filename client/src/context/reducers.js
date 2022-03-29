import { contractEnum, web3Enum, tokenEnum, userEnum } from "./enums.js";

const contractReducer = (state, action) => {
  switch (action.type) {
    case contractEnum.TRANSACTION_CONTRACT_INIT:
      console.log("Transaction contract made");
      return { ...state, transactionContract: action.value };

    case contractEnum.TRANSACTIONS:
      console.log("Transactions updated");
      return { ...state, transactions: action.value };

    case contractEnum.TRANSACTION_COUNT:
      console.log("Transactions count updated");
      return { ...state, transactionCount: action.value };

    case contractEnum.TOKEN_CONTRACT_INIT:
      console.log("Ace token contract made");
      return { ...state, aiboostTokenContract: action.value };

    case contractEnum.TOKEN_PRICE:
      console.log("Ace token price updated");
      return { ...state, tokenPrice: action.value };

    case contractEnum.SALE_CONTRACT_INIT:
      console.log("Sale contract made");
      return { ...state, aiboostTokenSaleContract: action.value };

    case contractEnum.LOTTERY_POOL_CONTRACT_INIT:
      console.log("Lottery pool init");
      return { ...state, lotteryPoolContract: action.value };

    case contractEnum.LOTTERY_INIT:
      console.log("Lottery contract init");
      return { ...state, lotteryContract: action.value };

    case contractEnum.LOTTERIES_DETAILS:
      console.log("Lottery details init");
      return { ...state, lotteriesDetails: action.value };

    case contractEnum.LOTTERY_MANAGER:
      console.log("LOTTERY_MANAGER updated");
      return { ...state, lotteryManager: action.value };

    case contractEnum.LOTTERY_ENTRY_FEE:
      console.log("LOTTERY_ENTRY_FEE updated");
      return { ...state, lotteryEntryFee: action.value };

    case contractEnum.LOTTERY_PLAYERS:
      console.log("LOTTERY_PLAYERS updated");
      return { ...state, lotteryPlayers: action.value };

    case contractEnum.LOTTERY_WINNER:
      console.log("LOTTERY_WINNER updated");
      return { ...state, lotteryWinner: action.value };

    case contractEnum.LOTTERY_TIME_REMAINING:
      console.log("LOTTERY_TIME_REMAINING updated");
      return { ...state, lotteryTimeRemaining: action.value };

    case contractEnum.LOTTERY_STATUS:
      console.log("LOTTERY_STATUS updated");
      return { ...state, lotteryStatus: action.value };

    case contractEnum.LOTTERY_PRICE:
      console.log("LOTTERY_PRICE updated");
      return { ...state, lotteryPrice: action.value };

    case contractEnum.LOTTERY_START:
      console.log("LOTTERY game started");
      return { ...state, lotteryStart: action.value };

    case contractEnum.LOTTERY_ENTER:
      console.log("You have entered the lottery");
      return { ...state, lotteryEnter: action.value };

    case contractEnum.LOTTERY_END:
      console.log("LOTTERY has ended");
      return { ...state, lotteryEnd: action.value };

    default:
      console.log(
        "Invalid value at Transaction Provider",
        action.type,
        action.value
      );
  }
};

const web3Reducer = (state, action) => {
  switch (action.type) {
    case web3Enum.PROVIDER:
      console.log("Web3 Provider init");
      return { ...state, provider: action.value };
    default:
      console.log(
        "Invalid value at web3Reducer Provider",
        action.type,
        action.value
      );
  }
};

const userReducer = (state, action) => {
  switch (action.type) {
    case userEnum.BALANCE:
      console.log("Balance updated");
      return { ...state, balance: action.value };
    case userEnum.CURR_ACCOUNT:
      console.log("Curr account updated");
      return { ...state, currentAccount: action.value };
    default:
      console.log(
        "Invalid value at web3Reducer Provider",
        action.type,
        action.value
      );
  }
};

const tokenReducer = (state, action) => {
  switch (action.type) {
    case tokenEnum.BALANCE:
      console.log("Token balance updated");
      return { ...state, balance: action.value };
    case tokenEnum.PRICE:
      console.log("Token price updated");
      return { ...state, price: action.value };
    case tokenEnum.SOLD:
      console.log("Token sold updated");
      return { ...state, sold: action.value };
    default:
      console.log(
        "Invalid value at token reducer Provider",
        action.type,
        action.value
      );
  }
};

export { contractReducer, web3Reducer, userReducer, tokenReducer };
