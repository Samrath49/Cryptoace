import React from "react";
import Notification from "../components/Notification";

const BuyToken = () => {
  return (
    <>
      BuyToken
      <Notification
        props={{
          type: 3,
          message: "Wallet Connected",
        }}
      />
    </>
  );
};

export default BuyToken;
