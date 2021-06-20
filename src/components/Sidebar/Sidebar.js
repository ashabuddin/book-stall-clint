import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
               <h1>Manage Books</h1>
                <li> <Link to='/admin'>Add Book</Link> </li>
                <li> <Link to='/delate'>Delate Books</Link> </li>
            </ul>
        </div>
    );
};

export default Sidebar;