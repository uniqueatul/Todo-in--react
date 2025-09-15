import React from 'react';
import axios from 'axios';
import { useState} from  'react';


function create() {
  const [name , setname] =useState([]);
  const handlesubmit = () =>{
    axios.post("https://api.escuelajs.co/api/v1/products",{
      name: name,

    })
    .then(() =>{
      alert("data create successfully");

    });
  };


  return (
    <div>
      <h2>create </h2>
      <input type="text"
      placeholder='Enter Name'
      value={name}
      onChange={(e) =>setname(e.target.value)
            }      />

            <button onClick={handlesubmit} >Add  </button>

    </div>
    
  );
}

export default create;