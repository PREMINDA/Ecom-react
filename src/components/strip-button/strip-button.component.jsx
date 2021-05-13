import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripChButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("payment compleat");
  };
  const priceForStrip = price * 100;
  const PublishableKey =
    "pk_test_51IqcVBDIC0SuF92LpQKRm0VYVUSmJumgflqAbPq5hYn24rFultmbGJilzEY5Co5BCIWNMnLohrqQh1tGtC81ZwvQ00fNjK0cyk";
  return (
    <StripeCheckout
      label="Pay noe"
      name="ASD"
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
};

export default StripChButton;
