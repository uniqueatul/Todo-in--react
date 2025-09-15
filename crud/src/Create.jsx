import React from 'react'
import { useState,  } from 'react'


function Create() {
    const [title , settitle] = useState('');


    const handleCreate = () =>{
        axios.post("https://api.escuelajs.co/api/v1/products", {
            title: title,
            price: 100,
            description: "Test Product" ,
            CategoryId: 1,
            Image: ["https://placeimg.com/640/480/any"]
        })
        .then(() =>{
            alert("product created!");
            settitle("");
            window.location.reload();
        });
    };



  return (
    <div>
        <input type="text"
        placeholder='product Title'
        value={title}
        onChange={(e) => settitle (e.target.value)}
        />

        <button onClick={handleCreate}>Add</button>








    </div>
  );
}

export default Create;