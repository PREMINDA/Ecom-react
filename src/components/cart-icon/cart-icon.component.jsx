import React from "react";
import { connect } from "react-redux";

import { ReactComponent as BagLogo } from "../../assets/shopping-bag.svg.svg";

import "./cart-icon.style.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <BagLogo className="bag-icon"></BagLogo>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
