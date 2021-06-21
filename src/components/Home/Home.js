import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Home.css';


const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://blooming-tor-37064.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="container mt-5 mb-5">
            <div className='row'>

                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;