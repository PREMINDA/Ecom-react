import React from "react";

import "./shop.style.scss";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "./../../redux/collection/shop.selector";
import { connect } from "react-redux";

const ShopPage = ({ collection }) => {
  return (
    <div className="shopepage">
      {collection.map(({ id, ...otherCollectionpropes }) => (
        <CollectionPreview key={id} {...otherCollectionpropes} />
      ))}
    </div>
  );
};

const mapStateToPros = createStructuredSelector({
  collection: selectCollection,
});

export default connect(mapStateToPros)(ShopPage);
