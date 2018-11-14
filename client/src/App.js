import React, { Component, Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeScreen from './containers/WelcomeScreen';
import Questions from './containers/Question';
import Results from './containers/Results';

class App extends Component {
  render() {

    return (
      <Router>
        <Fragment>
          <Route exact path='/quiz' component={WelcomeScreen}/>
          <Route exact path='/questions/:id' component={Questions} />
          <Route exact path='/results' component={Results} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
