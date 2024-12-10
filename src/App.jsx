import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
