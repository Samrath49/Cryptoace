const main = async () => {
  // Transactions
  const transactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();
  console.log("Transactions address: ", transactionsContract.address);

  const tokenPrice = 1000000000000;

  const aceTokenFactory = await hre.ethers.getContractFactory("AceToken");
  const aceTokenContract = await aceTokenFactory.deploy(1000000);
  const tokenSaleFactory = await hre.ethers.getContractFactory("TokenSale");

  const tokenSaleContract = await tokenSaleFactory.deploy(
    aceTokenContract.address,
    tokenPrice
  );

  await aceTokenContract.deployed();
  await tokenSaleContract.deployed();
  console.log("aceTokenContract address: ", aceTokenContract.address);
  console.log("tokenSaleContract address: ", tokenSaleContract.address);

  // Lottery
  const lotteryPoolFactory = await hre.ethers.getContractFactory("LotteryPool");
  const lotteryPoolContract = await lotteryPoolFactory.deploy();

  await lotteryPoolContract.deployed();

  console.log("LotteryPoolContract address: ", lotteryPoolContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

// npx hardhat run scripts/deploy.js --network ropsten
