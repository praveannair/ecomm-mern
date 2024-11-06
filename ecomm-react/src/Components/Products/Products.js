import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/products/all").then((res) => {
      setproducts(res.data);
    });
  }, []);
  console.log(products);
  return (
    <div style={{ display: "flex", justifyContent:"center" }}>
      {products &&
        products.map((products) => (
          <div style={{margin:"10px"}}>
            <p>
              <img src={products.url}></img>
            </p>
            <h3>{products.name}</h3>
            <p>{products.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
    </div>
  );
}
