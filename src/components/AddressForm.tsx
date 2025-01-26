import { AddressElement } from "@stripe/react-stripe-js";
import React from "react";

const AddressForm = () => {
  return (
    <form>
      <h3>Address</h3>
      <AddressElement
        options={{ mode: "shipping" }}
        onChange={(event) => {
          if (event.complete) {
            console.log("Address complete");
          }
        }}
      />
    </form>
  );
};

export default AddressForm;