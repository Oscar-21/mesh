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
import About from '../About';
import SignUp from '../SignUp';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class App extends React.Component {
/*  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    this.loadSkills();
  }*/

 /* componentDidUpdate(prevState) {
    if (prevState.selectedSkills !== this.state.selectedSkills) {
      console.log('new skill yo');
      this.storeUserData();
    }
  }*/


  render() {
    return (
      <div>
        {console.log('app')}
        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/join' component={SignUp} />
          <Route render= {() => <p>Not Found!</p>} />
        </Switch>

        <Footer />
            
      </div>
    );
  }

}
export default App;


