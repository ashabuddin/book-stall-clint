import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Book = ({book}) => {
    console.log(book);
     
    const history = useHistory()
    const handleBook = (orderBook) => {
        history.push(`/checkout/${orderBook}`);
    }

    return (
        <div className='col-md-4'>
           

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.imageURL} />
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                        <p>${book.price}</p>
                    <Button onClick={() => handleBook(book._id)} variant="primary">Buy Now</Button>
                </Card.Body>
             </Card>
            
        </div>
    );
};

export default Book;