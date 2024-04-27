import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState(getDefaultCart());
  const addToCart = (id) => {
    setCartItem((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };
  const removeFromCart = (id) => {
    setCartItem((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };
  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
