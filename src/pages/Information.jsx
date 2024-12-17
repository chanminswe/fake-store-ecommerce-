import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/Information.css";
import StarRatings from "react-star-ratings";

function Information() {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [rating, setRating] = useState();
  const [review, setReview] = useState();

  useEffect(() => {
    async function getItem() {
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
          setRating(data.rating.rate);
          setReview(data.rating.count);
        });
    }

    getItem();
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
        {window.innerWidth >= 700 && (
          <div className="type-name">
            <p>{item.description}</p>
          </div>
        )}
        <div className="type-name star-review">
          <StarRatings
            rating={rating}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
          />
          <p>Reviewed by : {review} Users</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
