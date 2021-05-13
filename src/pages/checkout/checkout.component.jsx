import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripChButton from "./../../components/strip-button/strip-button.component";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "./../../redux/cart/cart.item.selectors";

import CheckoutItem from "./../../components/checkout-items/checkout-items.component";

import "./checkout.style.scss";

const CheckoutPage = ({ cartItems, total }) => {
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
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="empty-text">Your Cart is Empty</span>
      )}
      <h2>{cartItems.length ? total : null}</h2>
      <StripChButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
