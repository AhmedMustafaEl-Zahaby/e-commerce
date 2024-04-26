import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Contexts/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
function ShopCategory(props) {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt={`${props.category}'s banner`}
      />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((product) => {
          if (product.category === props.category) {
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
          } else {
            null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
}

export default ShopCategory;
