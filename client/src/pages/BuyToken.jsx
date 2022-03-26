import React from "react";
import Notification from "../components/Notification";

const error = true;

const BuyToken = () => {
  return (
    <>
      BuyToken
      <Notification
        props={{
          type: 1,
          message: "Token buy was successful",
        }}
      />
      {error ? (
        <Notification
          props={{
            type: 3,
            message: "Token buy not successful",
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default BuyToken;
