import React from "react";

import "./cart-item.componetn.scss";

const CartItem = ({ item }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <sapn className="name">{item.name}</sapn>
      <span className="price">
        {item.quantity} x ${item.price}
      </span>
    </div>
  </div>
);

export default CartItem;
