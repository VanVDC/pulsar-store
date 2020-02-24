import React from "react";
import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

//the hell
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_rX6VriD3nh3Z29VULG4TWrDm00vAfoN5W0";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment is successful");
      })
      .catch(error => {
        console.log("Paymen error: ", JSON.parse(error));
        alert("There was an issue with your payment.");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Pulsar Store"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
