import React from "react";
import axios from "axios";

function Delete({ id }) {
  const handleDelete = () => {
    axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(() => {
        alert("Product Deleted!");
        window.location.reload();
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default Delete;
