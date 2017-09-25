/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

const About = () => ( 
  <div>
    <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
    About
  </div>
);
export default About;
