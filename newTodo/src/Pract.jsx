import React from 'react'
import { useState } from 'react'

function pract() {

    const [count , setcount] = useState();

    const clickHandler = () =>{
        setcount (count+1)
    }
  return (
    <div>
        <h2>increase the count </h2>

        <button onClick={() =>setcount (count-1)

        }>-</button>

        <button onClick={clickHandler}>+</button>


    </div>
  )
}

export default pract;