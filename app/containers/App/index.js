/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

const App = (props) => (
  <div>
    React-BoilerPlate
   <div>
     {props.children}
   </div>
  </div>
);
export default App;

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};


