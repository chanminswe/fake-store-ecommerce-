import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([{ itemName: "", price: 0, quantity: 0 }]);

  const addItem = (itemName, price) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.itemName === itemName);

      if (existingItem) {
        return prevCart.map((item) =>
          item.itemName === itemName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { itemName, price, quantity: 1 }];
      }
    });

    toast.success("Item Added Sucessfully!");
  };

  const removeItem = (itemName) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.itemName === itemName);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map((item) =>
            item.itemName === itemName
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCart.filter((item) => item.itemName !== itemName);
        }
      }

      return prevCart;
    });

    toast.success("Item removed successfully!");
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
