import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionPreview from "./../../components/preview-collection/preview-collection.component";
import { selectCollection } from "./../../redux/collection/shop.selector";

import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h2>page cat</h2>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collection: selectCollection(ownprops.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
