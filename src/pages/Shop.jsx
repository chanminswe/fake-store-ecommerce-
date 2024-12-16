import React, { useEffect, useState } from "react";
import "../styles/pages/Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getData() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error(error));
    }

    getData();
  }, []);

  return (
    <div className="item-container">
      {products.map((items, index) => (
        <figure className="item-lists" key={index}>
          <img 
          className="item-image"
          src={items.image} alt={items.title} />
          <figcaption
          className="item-caption"
          >{items.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Shop;
