
import React from 'react'
import { useState } from 'react'
import { generateRandomNumber } from './helpher';





function Lottery() {
    let [Ticket , setTicket] = useState(generateRandomNumber(3));
    let isWinning = sum(Ticket) === 15;

    let buyTicket = () =>{
        setTicket(generateRandomNumber(3));
    };


  return (
    <div>
        <h1>Lottery Game! </h1>
        <div className='ticket'>
            <span>{Ticket[0]}</span>
            <span>{Ticket[1]}</span>
            <span>{Ticket[2]}</span>
        </div>
        <br />
        
        <div>
            <button onClick={buyTicket}> Buy new Ticket </button>
            <h3>{isWinning && "congratulation" } </h3>
        </div>



    </div>
  );
}

export default Lottery;