import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/Information.css";

function Information() {
  const { id } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, []);

  return (
    <div className="information-container">
      <figure className="image-container">
        <img className="image-information" src={item.image} />
      </figure>

      <div className="item-informations">
        <div className="type-name">
          <p>Category</p>
          <p>{item.category}</p>
        </div>
        <div className="type-name">
          <p>Price</p>
          <p style={{ color: "green" }}>${item.price}</p>
        </div>
        <div className="type-name title">
          <p style={{ color: "gray" }}>{item.title}</p>
        </div>
        <div className="type-name">
          <p>{item.description}</p>
        </div>
        <div className="type-name">
          <p>{item.rating.rate}</p>
          <p>{item.rating.count}</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
