import React, { useState, useEffect } from "react";
import axios from "axios";
import Update from "./Update";
import Delete from "./Delete";

function Read() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Products List</h2>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.title}</span>
          <Update id={product.id} currentTitle={product.title} />
          <Delete id={product.id} />
        </div>
      ))}
    </div>
  );
}

export default Read;
