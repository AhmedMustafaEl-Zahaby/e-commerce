import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Contexts/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

function ShopCategory(props) {
  let { all_products } = useContext(ShopContext);
  const [displayCount, setDisplayCount] = useState(8);

  useEffect(() => {
    setDisplayCount(4);
  }, [props.category]);

  let buff = all_products.filter(
    (product) => product.category === props.category
  );

  all_products = buff;
  console.log(all_products);

  const handleExploreMore = (e) => {
    e.preventDefault();
    setDisplayCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt={`${props.category}'s banner`}
      />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-
            {displayCount > 12 ? 12 : displayCount}
          </span>{" "}
          out of 12 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.slice(0, displayCount).map((product) => {
          return (
            <Item
              key={product.id}
              img={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
              id={product.id}
            />
          );
        })}
      </div>
      {displayCount < 12 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="shopcategory-loadmore" onClick={handleExploreMore}>
            Explore More
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopCategory;
