import React from "react";
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size }) => (
  <div
    // add inline style as javascript object
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    // pass prop value in className
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;
