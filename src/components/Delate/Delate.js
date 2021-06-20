import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';

const Delate = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://blooming-tor-37064.herokuapp.com/books')
        .then((res) => res.json())
        .then((data) =>setBooks(data))
    },[])

    const handleDelete = (id) => {
        fetch(`https://blooming-tor-37064.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then ((result) => {
        if (result) {
            const remainBooks = books.filter(
              (book) => book._id !== id
            );
            alert("YAY!", "You deleted the book!", "success");
            setBooks(remainBooks);
        }
        });
    }

    return (
        <div className='row'>
            <div className='col-md-3'>
                <Sidebar/>
            </div>
            <div className='col-md-9'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { books.map((book) =>(
                            <tr id="parent">
                            <td>{book.name}</td>
                            <td>${book.price}</td>
                            <td>
                              <button
                                onClick={() => handleDelete(`${book._id}`)}
                                className="btn btn-danger"
                              > Delete</button>
                            </td>
                          </tr>

                            ))} 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Delate;