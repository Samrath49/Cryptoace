import React from "react";
import Notification from "../components/Notification";

const SendEther = () => {
  return (
    <>
      <section className="flex-1 p-4 space-y-10 bg-[#000000e5]">
        Send Ether
      </section>
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
