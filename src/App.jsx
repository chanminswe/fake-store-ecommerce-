import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Information from "./pages/Information";
import ScreenContextProvider from "./context/ScreenContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />

      <ScreenContextProvider>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/information/:id" element={<Information />} />
          </Routes>
        </CartContextProvider>
      </ScreenContextProvider>
    </>
  );
};

export default App;
