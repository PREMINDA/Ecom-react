import React from "react";
import SHOP_DATA from "./shop.data";
import "./shop.style.scss";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className="shopepage">
        {collection.map(({ id, ...otherCollectionpropes }) => (
          <CollectionPreview key={id} {...otherCollectionpropes} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
