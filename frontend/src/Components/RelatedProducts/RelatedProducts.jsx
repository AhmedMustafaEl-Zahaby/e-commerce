import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
function RelatedProducts() {
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {data_product.map((product, id) => {
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
    </div>
  );
}

export default RelatedProducts;
