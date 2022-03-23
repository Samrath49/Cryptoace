import React from "react";
import { Welcome, MakeSure, Services, Transactions } from "../components";

const Home = () => {
  return (
    <div>
      <Welcome />
      <MakeSure />
      <Services />
      <Transactions />
    </div>
  );
};

export default Home;
