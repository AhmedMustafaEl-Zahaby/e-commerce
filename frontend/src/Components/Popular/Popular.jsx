import React from "react";
import "./Popular.css";
import data_popular from "../Assets/data";
import Item from "../Item/Item";
function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_popular.map((item, index) => {
          return (
            <Item
              key={index}
              img={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
