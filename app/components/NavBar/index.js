import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './style.css';

const Navbar = () => ( 
  <nav clasName="navbar">
    <div className="logo"></div>
    <ul>
      <Link to="/"> <li> Home </li> </Link>
      <Link to="/about"> <li> About </li> </Link>
    </ul>
  </nav> 
);
export default withRouter(Navbar);
