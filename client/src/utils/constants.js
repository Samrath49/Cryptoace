import { abi as transactionABI } from "../artifacts/contracts/Transactions.sol/Transactions.json";
import { abi as tokenSaleABI } from "../artifacts/contracts/TokenSale.sol/TokenSale.json";
import { abi as aceTokenABI } from "../artifacts/contracts/AceToken.sol/AceToken.json";
import { abi as lotteryPoolABI } from "../artifacts/contracts/LotteryPool.sol/LotteryPool.json";

import { abi as lotteryABI } from "../artifacts/contracts/Lottery.sol/Lottery.json";

export const transactionContractAddress =
  "0x80C8fF70b44bc8004cd6ab143daEd792B2002971";
export const transactionContractABI = transactionABI;

export const aceTokenContractAddress =
  "0x94790434a6A5f99cD42bFBF413563c2bE0Ac818a";
export const aceTokenContractABI = aceTokenABI;

export const tokenSaleContractAddress =
  "0x86A5dd6A0601F8803A425abA5296D921E24cb1A3";
export const tokenSaleContractABI = tokenSaleABI;

export const lotteryPoolContractAddress =
  "0x8e5D563CB4E632966253F6ea3F56D651ff91fE0B";
export const lotteryPoolContractABI = lotteryPoolABI;

export const lotteryContractABI = lotteryABI;