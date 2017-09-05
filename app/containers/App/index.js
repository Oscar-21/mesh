/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';

const App = (props) => (
  <div>
    React-BoilerPlate

    <Switch>
      <Route exact path='/' component={Home} />
      <Route render= { function() { return <p>Not Found</p> } } />
    </Switch>
	
  </div>
);
export default App;

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};


