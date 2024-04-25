import React from "react";
import "./Item.css";
function Item({ img, name, new_price, old_price }) {
  return (
    <div className="item">
      <img src={img} alt={name} />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
}

export default Item;
