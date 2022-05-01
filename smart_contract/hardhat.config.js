require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Jf5-PQUvqzsci3xk-WwXwHPk-z85g2yV",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "../client/src/artifacts",
  },
};
