import React from "react";
import { connect } from "react-redux";

import "./collection-items.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        className="custom-button"
        inverted
      >
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToPrpos = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToPrpos)(CollectionItem);
