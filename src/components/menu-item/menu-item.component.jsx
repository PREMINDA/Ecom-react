import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl }) => (
  <div className="menu-item">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
