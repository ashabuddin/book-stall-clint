import React from 'react';
import { Card } from 'react-bootstrap';

const OrderDetail = ({order}) => {
    console.log(order);
    const {name, imageURL, orderTime} = order;
    return (
        <div className='col-md-4'>
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">{orderTime}</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default OrderDetail;