import { abi as transactionABI } from "../artifacts/contracts/Transactions.sol/Transactions.json";
import { abi as tokenSaleABI } from "../artifacts/contracts/TokenSale.sol/TokenSale.json";
import { abi as aceTokenABI } from "../artifacts/contracts/AceToken.sol/AceToken.json";
import { abi as lotteryPoolABI } from "../artifacts/contracts/LotteryPool.sol/LotteryPool.json";
import { abi as lotteryABI } from "../artifacts/contracts/Lottery.sol/Lottery.json";

// ADD YOUR OWN CONTRACT ADDRESSES IN ".env" FILE

export const transactionContractAddress = import.meta.env
  .VITE_TRANSACTION_CONTRACT;
export const transactionContractABI = transactionABI;

export const aceTokenContractAddress = import.meta.env.VITE_ACE_TOKEN_CONTRACT;
export const aceTokenContractABI = aceTokenABI;

export const tokenSaleContractAddress = import.meta.env
  .VITE_TOKEN_SALE_CONTRACT;
export const tokenSaleContractABI = tokenSaleABI;

export const lotteryPoolContractAddress = import.meta.env.VITE_LOTTERY_CONTRACT;
export const lotteryPoolContractABI = lotteryPoolABI;

export const lotteryContractABI = lotteryABI;
