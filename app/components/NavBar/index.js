import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './style.css';

const Navbar = () => ( 
  <nav className="navbar">
    <div className="logo"></div>
    <ul>
      <Link to="/"> <li> Home </li> </Link>
      <Link to="/join"> <li> Sign Up </li> </Link>
      <Link to="/about"> <li> About </li> </Link>
    </ul>
  </nav> 
);
export default withRouter(Navbar);
