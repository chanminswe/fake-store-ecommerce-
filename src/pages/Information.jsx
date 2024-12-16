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
        <img 
        className="image-information"
        src={item.image} />
      </figure>

      <div className="item-informations">
        
      </div>
    </div>
  );
}

export default Information;
