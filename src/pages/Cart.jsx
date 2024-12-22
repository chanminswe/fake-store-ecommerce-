import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextProvider";
import "../styles/pages/Cart.css";

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div className="cart-container">
      <div className="cart-title">
        <div style={{ maxWidth: "33%" }}>
          <p>Item Name</p>
        </div>
        <p style={{ maxWidth: "33%" }}>Quantity</p>
        <p style={{ maxWidth: "33%" }}>Price</p>
      </div>
      {cart.map(
        (value, index) =>
          value.quantity !== 0 && (
            <div className="cart-items">
              <div style={{ maxWidth: "25%", fontSize: "small" }}>
                <p>{value.itemName}</p>
              </div>
              <p>{value.quantity}</p>
              <div className="remove-btn-container">
                <p>{value.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(value.itemName)}
                >
                  X
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Cart;
