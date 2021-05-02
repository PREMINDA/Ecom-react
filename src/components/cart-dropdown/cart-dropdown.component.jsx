import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.item.selectors";
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, match, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-text">Your Cart is Empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push(`${match.url}checkout`)}>
      CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
