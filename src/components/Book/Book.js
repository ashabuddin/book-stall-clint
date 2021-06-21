import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Book = ({ book }) => {
    console.log(book);

    const history = useHistory()
    const handleBook = (_id) => {
        history.push(`/checkout/${_id}`);
    }

    return (
        <div className='col-md-4 book-card ' style={{ width: '18rem' }} >

            <Card  >
                <Card.Img className='d-flex justify-content-between' variant="top" 
                style={{ height: '400px'}} src={book.imageURL} />

                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <div className='d-flex justify-content-around'>                     
                        <Button onClick={() => handleBook(book._id)} variant="primary">Buy Now</Button>
                        <h5 style={{ marginTop: "15px" }}>${book.price}</h5>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;