import React from "react";
import "../styles/pages/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 style={{ color: "white" }}>Welcome to FakeShop</h1>
        <p>
          Your favorite place to shop the latest trends and everyday essentials.
        </p>
        <Link to="/shop" className="cta-button">
          Shop Now
        </Link>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          <div className="product-card">
            <img
              src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
              alt="Category 1"
            />
            <p>Electronics</p>
          </div>
          <div className="product-card">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Category 2"
            />
            <p>Fashion</p>
          </div>
          <div className="product-card">
            <img
              src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
              alt="Category 3"
            />
            <p>Jewellery</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
