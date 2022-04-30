

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://cryptoace.netlify.app/">
    <img src="./client/assets/images/logo.svg" width="25px" alt="Logo" width="280" height="120">
    <h1 align="center">Cryptoace</h1>
  </a>

  <h3 align="center">A web3 application</h3>

  <p align="center">
    <a href="https://cryptoace.netlify.app/">View Live</a>
    ·
    <a href="https://github.com/ankit5577/aiboostWeb3/issues">Report Bug</a>
    ·
    <a href="https://github.com/ankit5577/aiboostWeb3/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

AiBoost next is a extenstion to project https://www.aiboost.in
this is a personal project which showcase the Web3 aspect of a website. it has functionalities like - send ether, lottery game, staking the token, buy aiboost token.

<!-- `Why to use MedicoEye?`
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

A list of commonly used resources that I find helpful are listed in the acknowledgements. -->

### Built With

For | Technlogy
------------ | -------------
Frontend📱 | ReactJS, Tailwind CSS
Blockchain📱 | Smart contracts, Eth, Solidity
Web3 Framework | Truffle, ganache

### Libraries
`FRONTEND`
- ReactJS
- TailwindCSS
- react-router
- Ethers

`BACKEND`
- Hardhat
- Ethers
- Chai

### Folder Structure
#### Frontend
```
frontend/
┣ src/
┃ ┣ app/
┃ ┃ ┣ auth/
┃ ┃ ┃ ┣ confirm-email/
┃ ┃ ┃ ┣ login/
┃ ┃ ┃ ┣ page-not-found/
┃ ┃ ┃ ┣ reset-password/
┃ ┃ ┃ ┗ sign-up/
┃ ┃ ┣ core/
┃ ┃ ┃ ┣ enum/
┃ ┃ ┃ ┣ guard/
┃ ┃ ┃ ┣ interceptor/
┃ ┃ ┃ ┣ model/
┃ ┃ ┃ ┗ service/
┃ ┃ ┣ data/
┃ ┃ ┣ pages/
┃ ┃ ┃ ┣ admin/
┃ ┃ ┃ ┣ common/
┃ ┃ ┃ ┃ ┗ edit-profile/
┃ ┃ ┃ ┣ doctor/
┃ ┃ ┃ ┃ ┣ dashboard/
┃ ┃ ┃ ┃ ┣ medicine/
┃ ┃ ┃ ┃ ┃ ┣ add-edit-medicine/
┃ ┃ ┃ ┃ ┣ patient/
┃ ┃ ┃ ┃ ┃ ┣ diagnose/
┃ ┃ ┃ ┃ ┃ ┣ list/
┃ ┃ ┃ ┃ ┃ ┗ queue/
┃ ┃ ┃ ┣ lab/
┃ ┃ ┃ ┣ layout/
┃ ┃ ┃ ┣ receptionist/
┃ ┃ ┃ ┃ ┣ patient/
┃ ┃ ┃ ┃ ┃ ┣ existing/
┃ ┃ ┃ ┃ ┃ ┣ list/
┃ ┃ ┃ ┃ ┃ ┣ new/
┃ ┃ ┃ ┣ super-admin/
┃ ┃ ┃ ┗ user/
┃ ┣ assets/
┃ ┃ ┣ images/
```

#### Backend
```
backend/
┣ bin/
┃ ┗ www
┣ config/
┃ ┣ aws-config.json
┃ ┗ passport.js
┣ models/
┃ ┣ hospital.js
┃ ┣ medicine.js
┃ ┣ patient.js
┃ ┗ user.js
┣ public/
┣ routes/
┃ ┣ _helper.js
┃ ┣ admin.js
┃ ┣ aws.js
┃ ┣ common.js
┃ ┣ doctor.js
┃ ┣ image.js
┃ ┣ lab.js
┃ ┣ medicine.js
┃ ┣ receptionist.js
┃ ┗ user.js
┣ views/
┃ ┣ error.jade
┃ ┣ index.jade
┃ ┗ layout.jade
┣ .dockerignore
┣ .env
┣ Dockerfile
┣ app.js
┣ main.py
┣ package-lock.json
┣ package.json
┗ readme.txt
```

<!-- End of AK -->

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* node - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* mongodb - https://docs.mongodb.com/manual/installation/
* angular
  ```bash
  $ npm install -g @angular/latest
  ```

### Installation
1. Clone the repo
   ```bash
   $ git clone https://github.com/ankit5577/medicoEye.git
   ```
1. Install NPM packages in both `frontend` and `backend` folder
   ```bash
   $ npm install
   ```
1. add `.env` file in backend folder
   ```env
    PORT="3000" # specify express port
    HOST="" 
    MONGO_URL="" # specify mongodb url
    SECRET="" # secret for passportjs
    EMAIL="" # gmail temp app email
    PASSWORD="" # gmail temp app password
   ```
2. run ```npm start``` in both frontend and backend folders.

<!-- USAGE EXAMPLES -->
## Usage
* go to [App](https://www.medicoeye.in)
<img src="assets/medicoeye_login.png" width="100%" height="100%">

login with any of these credentials:
```
<!-- for receptionist🧑🏽‍💻 role -->
email: cmcrecep@gmail.com
password: ankit
```

* Dashboard
<img src="assets/medicoeye_dashboard.png" width="100%" height="100%">

<!-- CONTRIBUTING -->
## Contributing

**For AiBoost**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.




<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/anki5577/medicoEye/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/anki5577/medicoEye/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/anki5577/medicoEye/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: hhttps://github.com/anki5577/medicoEye/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/anki5577/medicoEye/assets/LICENSE.txt
[linkedin-aiboost]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ankit5577


<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Svelte](https://svelte.dev/)
* [Laravel](https://laravel.com)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```


<div align="center">
<h1><img width="27" height="25" src="./client/assets/images/logo.svg" alt="logo"/>Cryptoace</h2/>
<p><b>A web3 etherium based application</b></p>

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)&nbsp;&nbsp;
<a href="https://github.com/Samrath49/Cryptoace"><img alt="GitHub stars" src="https://img.shields.io/github/repo-size/Samrath49/Cryptoace"></a>&nbsp;&nbsp;

<a href="https://app.netlify.com/sites/cryptoace/deploys"><img alt="Netlify Build" src="https://api.netlify.com/api/v1/badges/f27790f0-71f5-4754-97a3-c62112d67271/deploy-status"></a>

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

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

A few open-source resources that helped in the development of this project.

* [Rad Lines](https://msurguy.github.io/rad-lines/)
* [Remix Etherium](https://remix.ethereum.org/)
* [Shapefest](https://www.shapefest.com/)
* [3dIcons](https://3dicons.co/)

:star: Like the project? Star this repo — it motivates a lot!