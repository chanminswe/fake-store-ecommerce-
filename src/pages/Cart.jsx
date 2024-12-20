import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextProvider";

function Cart() {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <div>
      {cart.map((value, index) => (
        <div></div>
      ))}
    </div>
  );
}

export default Cart;
