/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory, Route } from 'react-router';
import { useScroll } from 'react-router-scroll';

//import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';
import Home from 'containers/Home';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
/* eslint-enable import/no-unresolved, import/extensions */

// Import CSS reset and Global Styles
import './global-styles';

const NoMatch = () => <p>Page Not Found</p>;

// Set up the router, wrapping all Routes in the App component
const RootRoute = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/Home" component={Home} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

const render = () => {
  ReactDOM.render(
    <RootRoute />, 
    document.getElementById('app')
  );
};

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
