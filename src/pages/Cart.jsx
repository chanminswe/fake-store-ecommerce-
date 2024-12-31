  import React, { useContext, useEffect, useState } from "react";
  import { CartContext } from "../context/CartContextProvider";
  import "../styles/pages/Cart.css";

  function Cart() {
    const [total, setTotal] = useState(0);
    const { cart, removeItem, setCart } = useContext(CartContext);

    useEffect(() => {
      console.log(cart);
      const removeEmpty = cart.filter((items) => items.quantity !== 0);
      setCart(removeEmpty);

      function calculateTotal() {
        const totalPrice = cart.reduce((acc, value) => acc + value.price, 0);
        setTotal(totalPrice);
      }

      calculateTotal();
    }, []);

    return (
      <div className="cart-container">
        <div className="title-container">
          <h4>ItemName</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Remove Item</h4>
        </div>
        {cart.map((value, index) => (
          <div className="items-container">
            <p>{value.itemName}</p>
            <p>{value.price}</p>
            <p>{value.quantity}</p>
            {value.itemName && (
              <button onClick={() => removeItem(value.itemName)}>X</button>
            )}
          </div>
        ))}
        {cart.length > 0 && (
          <div className="price-count">
            <p>
              Total : <span style={{ color: "green" }}>${total}</span>
            </p>
            <button>Buy</button>
          </div>
        )}
      </div>
    );
  }

  export default Cart;
