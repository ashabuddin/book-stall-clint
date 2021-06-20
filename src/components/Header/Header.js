
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
             
           <div className='bookStall'>

                <h1>Book Stall</h1>
            </div>     
               
            
            <div>
                <nav className="nav">
                    <ul>
                    
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/sidebar">Admin</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to='/order'>Order</Link>
                        </li>
                    </ul>
                </nav>
            </div>
          
        </div>
    );
};

export default Header;