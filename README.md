<div align="center">
<h1><img width="27" height="25" src="./client/assets/images/logo.svg" alt="logo"/>Cryptoace</h2/>
<p><b>A web3 etherium based application</b></p>

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)&nbsp;&nbsp;
<a href="https://github.com/Samrath49/Cryptoace"><img alt="GitHub stars" src="https://img.shields.io/github/repo-size/Samrath49/Cryptoace"></a>&nbsp;&nbsp;

<a href="https://app.netlify.com/sites/cryptoace/deploys"><img alt="Netlify Build" src="https://api.netlify.com/api/v1/badges/f27790f0-71f5-4754-97a3-c62112d67271/deploy-status"></a>

 <a href="https://cryptoace.netlify.app/">View Live</a>
<p>A simple, convenient & efficient way to send cryptos across the world and track your every transaction on cryptoace<p/><br/>
</div>

## Features

- 🔔 **Notifications** : Notifications popup for every event
- 🔥 **Responsive Design** : Design also suited for small and medium devices.
- 🤏 **Optimized Performance** :  Performance optimized using [lighthouse](https://developers.google.com/web/tools/lighthouse).

## Built With

`FRONTEND`
- ReactJS
- TailwindCSS
- react-router
- Ethers

`BACKEND`
- Hardhat
- Ethers
- Chai


<!-- GETTING STARTED -->
## Getting Started

Follow these steps to setup this project locally.

### Installation

_Below are the instructions to setup this project and get started with._

1. Clone the repo
   ```sh
   git clone https://github.com/Samrath49/Cryptoace.git
   ```
2. Install NPM packages for `client` and `smart_contracts` folder
   ```sh
   npm install
   ```
3. Generate an API url for contracts and add your url to `hardhat.config.js` file using [Alchemy.io](https://www.alchemy.com/)
   ```js
   // hardhat.config.js file in smart_contracts
    ropsten: {
      url: {/* Your own url of contracts */},
    },
   ```
4. Add your metamask account's private key in `.env` file of smart_contract dir 
   ```sh
   PRIVATE_KEY=Metamask account private key 
   ```
5. Compile the smart_contracts using 
   ```sh
   npx hardhat run scripts/deploy.js --network ropsten
   ```
   This will compile contracts and provide the addresses of deployed contracts.
6. Create `.env` file in `client` folder and enter the contract addresses as shown below. 
   ```sh
   // add your addresses to .env
   VITE_TRANSACTION_CONTRACT=
   VITE_ACE_TOKEN_CONTRACT=
   VITE_TOKEN_SALE_CONTRACT=
   VITE_LOTTERY_CONTRACT=
   ``` 

7. Run the application by running following command in client folder
   ```sh
   npm run dev
   ```
<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

A few open-source resources that helped in the development of this project.

* [Rad Lines](https://msurguy.github.io/rad-lines/)
* [Remix Etherium](https://remix.ethereum.org/)
* [Shapefest](https://www.shapefest.com/)
* [3dIcons](https://3dicons.co/)

:star: Like the project? Star this repo — It motivates a lot!