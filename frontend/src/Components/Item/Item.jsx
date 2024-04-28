import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
function Item({ img, name, new_price, old_price, id }) {
  const handleClick = (e) => {
    if (e.target.tagName.toLowerCase() === "img") {
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={img} alt={name} onClick={handleClick} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
}

export default Item;
