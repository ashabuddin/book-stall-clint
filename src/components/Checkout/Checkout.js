

import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router';



const Checkout = () => {
    const {orderBook} = useParams();
    
    const [book, setBook] = useState({});
    useEffect(() => {
       fetch(`http://localhost:5000/book/${orderBook}`  )
      .then(res => res.json())
      .then(data =>setBook(data))  
    },[orderBook])

  

   

    const handleCheckOut = () =>{
        const newOrder = {
            ...book, 
            orderTime: new Date(),
            
         };
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

   
    return (
        <div>
            <h1> {book.name}</h1>
            <p>price: {book.price}</p>

          <button onClick={handleCheckOut} >Check Out </button>
            
        </div>
    );
};

export default Checkout;