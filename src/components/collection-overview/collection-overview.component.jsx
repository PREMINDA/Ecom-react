import React from "react";

import CollectionPreview from "./../preview-collection/preview-collection.component";
import { selectCollections } from "./../../redux/collection/shop.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collection-overview.style.scss";

const CollectionOverview = ({ collection }) => (
  <div className="collection-overview">
    {collection.map(({ id, ...otherCollectionpropes }) => (
      <CollectionPreview key={id} {...otherCollectionpropes} />
    ))}
  </div>
);

const mapStateToPros = createStructuredSelector({
  collection: selectCollections,
});

export default connect(mapStateToPros)(CollectionOverview);
