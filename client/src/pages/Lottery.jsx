import React from "react";
import Notification from "../components/Notification";

const Lottery = () => {
  return (
    <>
      <section className="flex-1 p-4 space-y-10 bg-[#000000e5]">
        Lottery
      </section>
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
