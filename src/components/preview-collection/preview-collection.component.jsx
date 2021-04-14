import React from "react";

import "./preview-collection.style.scss";

const CollectionPreview = ({ title, items }) => (
  <div calssName="coll-pre">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <div key={item.key}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
