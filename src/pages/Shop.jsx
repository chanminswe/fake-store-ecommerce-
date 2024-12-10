import React, { useEffect, useState } from "react";
import './Shop.css'

function Shop() {
  //hook
  //variable , function
  const [products, setProducts] = useState([]);

  //it runs first
  useEffect(() => {
    function getProducts() {
      //request
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        //data = response.json();
        .then((data) => {
          console.log(data);
          setProducts(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
         {product.category === 'men\'s clothing' ?  <img className="man-clothe"  src={product.image}></img> : <p></p> }
        </div>
      ))}
    </div>
  );
}

export default Shop;
