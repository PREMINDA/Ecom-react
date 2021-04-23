import React from "react";
import { ReactComponent as BagLogo } from "../../assets/shopping-bag.svg.svg";

import "./cart-icon.style.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <BagLogo className="bag-icon"></BagLogo>
    <span className="item-count">0</span>
  </div>
);
export default CartIcon;
