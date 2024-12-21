import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextProvider";
import "../styles/pages/Cart.css";

function Cart() {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <div className="cart-container">
      <div className="cart-title">
        <p>ItemName</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>
      {cart.map(
        (value, index) =>
          value.quantity !== 0 && (
            <div className="cart-items">
              <div style={{width : '33%'}}>
                <p>{value.itemName}</p>
              </div>
              <p>{value.quantity}</p>
              <p>{value.price}</p>
            </div>
          )
      )}
    </div>
  );
}

export default Cart;
