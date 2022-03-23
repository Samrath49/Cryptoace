import React from "react";
import Notification from "../components/Notification";

const SendEther = () => {
  return (
    <>
      SendEther
      <Notification
        props={{
          type: 2,
          message: "Opps can't send ether",
        }}
      />
    </>
  );
};

export default SendEther;
