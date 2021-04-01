

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const {orderBook} = useParams();
    console.log(orderBook);
    const [book, setBook] = useState({});
    useEffect(() => {
       fetch(`http://localhost:5000/book/${orderBook}`  )
      .then(res => res.json())
      .then(data =>setBook(data))  
    },[orderBook])
   
    return (
        <div>
            <h1> {book.name}</h1>
            <p>price: {book.price}</p>
            
        </div>
    );
};

export default Checkout;