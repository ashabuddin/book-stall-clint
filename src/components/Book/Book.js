import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Book = ({book}) => {
    console.log(book);
    return (
        <div className='col-md-4'>
           

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.imageURL} />
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                        <p>${book.price}</p>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
             </Card>
            
        </div>
    );
};

export default Book;