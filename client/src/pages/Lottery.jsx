import React from "react";
import Notification from "../components/Notification";

const Lottery = () => {
  return (
    <>
      Lottery
      <Notification
        props={{
          type: 1,
          message: "All is well ",
        }}
      />
    </>
  );
};

export default Lottery;
