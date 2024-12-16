import React, { useEffect, useState } from "react";
import "../styles/pages/Shop.css";
import { useNavigate } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function getData() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error(error));
    }

    getData();
  }, []);

  function viewProduct(id) {
    navigate(`/information/${id}`);
  }

  return (
    <div className="item-container">
      {products.map((items, index) => (
        <figure className="item-lists" key={index}>
          <img className="item-image" src={items.image} alt={items.title} />
          <figcaption className="item-caption">{items.title}</figcaption>
          <div className="price-btn-container">
            <p className="price">${items.price}</p>
            <button
              onClick={() => {
                viewProduct(items.id);
              }}
              className="addcart-btn"
            >
              view details
            </button>
          </div>
        </figure>
      ))}
    </div>
  );
}

export default Shop;
