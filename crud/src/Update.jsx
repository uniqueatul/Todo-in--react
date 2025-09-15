import React, { useState } from "react";
import axios from "axios";

function Update({ id, currentTitle }) {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(currentTitle);

  const handleUpdate = () => {
    axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, {
      title: newTitle,
      price: 100,
      description: "Test product",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"]
    })
    .then(() => {
      alert("Product Updated!");
      setEditMode(false);
      window.location.reload();
    });
  };

  return editMode ? (
    <>
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <button onClick={handleUpdate}>Save</button>
      <button onClick={() => setEditMode(false)}>Cancel</button>
    </>
  ) : (
    <button onClick={() => setEditMode(true)}>Edit</button>
  );
}

export default Update;
