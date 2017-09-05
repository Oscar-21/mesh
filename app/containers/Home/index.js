/*
 *
 * Home
 *
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <NavBar />
        Home
        <Footer />
      </div>
    );
  }
}
export default Home;
