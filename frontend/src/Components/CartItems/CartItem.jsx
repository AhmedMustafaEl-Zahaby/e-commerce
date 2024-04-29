import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Contexts/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
function CartItem() {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div>
              <div className="cart-items-format cart-items-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="cart-icon-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cart-item-quantity">
                  {cartItems[product.id]}
                </button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img
                  className="cart-items-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt="remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>cart Totals</h1>
          <div className="cart-items-total-items">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-items-total-items">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart-items-total-items total">
            <p>Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promocode, Entre it here</p>
          <div className="cart-items-promo-box">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
