 import React from 'react'
 import axios from 'axios'
 import { useState,useEffect} from  'react';
import Update from './Update';
import Delete from './Delete';


 
 function Read() {
    const [ data , setdata] = useState([]);

     useEffect(() =>{
            axios.get('https://api.escuelajs.co/api/v1/products')
            .then((res) =>{
                setdata(res.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
        } , []);
   return (



     <div>

        <h2>Read </h2>
       {data.map((item) =>(
        <div key={item.id}> 
        <p>{item.name}</p>
        <Update id = {item.id}/>
        <Delete id= {item.id}/>
            
             </div>

       ))}


        
        
         </div>
   )
 }
 
 export default Read;