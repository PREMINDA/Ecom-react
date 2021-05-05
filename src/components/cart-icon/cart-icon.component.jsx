import React from "react";
import { connect } from "react-redux";

import { ReactComponent as BagLogo } from "../../assets/shopping-bag.svg.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.item.selectors";
import "./cart-icon.style.scss";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <BagLogo className="bag-icon"></BagLogo>
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
