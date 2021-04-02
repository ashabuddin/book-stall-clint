
import React, { useEffect, useState } from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';

const Order = () => {
     const [order, setOrder] = useState([])
     useEffect(() => {
         fetch('https://blooming-tor-37064.herokuapp.com/order')
         .then(res => res.json())
         .then(data => setOrder(data))
     },[] )

    return (
        <div className='row'>
            {
                order.map(order =><OrderDetail order={order}></OrderDetail> )
            }
        </div>
    );
};

export default Order;