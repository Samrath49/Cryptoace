import React from "react";
import { Welcome, MakeSure, Services, Transactions } from "../components";

const Home = () => {
  return (
    <div className="">
      <Welcome />
      <MakeSure />
      <Services />
      <Transactions />
    </div>
  );
};

export default Home;
