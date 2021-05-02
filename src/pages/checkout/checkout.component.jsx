import React from "react";

import { connect } from "react-redux";
import { createSelectorCreator } from "reselect";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "./../../redux/cart/cart.item.selectors";
import "./checkout.style.scss";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createSelectorCreator({
  cartItems: selectCartItems,
  total: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
