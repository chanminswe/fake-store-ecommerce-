import React, { useEffect, useState } from "react";

const Example = () => {
  const [products, setProducts] = useState([]);
  const [single, setSingle] = useState(false);

  function getJokes() {
    function getProducts() {
      fetch("https://v2.jokeapi.dev/joke/Any?")
        .then((data) => data.json())
        .then((response) => {
          console.log(response);
          setProducts(response);
        })
        .catch((error) => console.error("Something went wrong", error));
    }

    //get store products!
    getProducts();
  }

  return (
    <>
      {products.type === "single" ? (
        <div>
          <p>{products.joke}</p>
        </div>
      ) : (
        <div>
          <p>{products.setup}</p> <p>{products.delivery}</p>
        </div>
      )}
      <button onClick={getJokes}>Get Joke</button>
    </>
  );
};

export default Example;
