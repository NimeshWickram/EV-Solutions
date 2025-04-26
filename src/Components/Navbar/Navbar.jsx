/*import './Navbar.css';


const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>EV-Solution</div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>



        </div>
    )
}*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
      <div className='nav'>
        <div className='nav-logo'>EV-Solution</div>
        <ul className='nav-menu'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className='nav-contact'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  };

export default Navbar
