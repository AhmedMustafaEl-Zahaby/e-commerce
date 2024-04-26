import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import new_collections from "../Assets/new_collections";

function NewCollections() {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((collection) => (
          <Item
            key={collection.id}
            img={collection.image}
            name={collection.name}
            new_price={collection.new_price}
            old_price={collection.old_price}
            id={collection.id}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
