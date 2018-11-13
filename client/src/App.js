import React, { Component, Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeScreen from './containers/WelcomeScreen';
import Questions from './containers/Questions';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path='/quiz' component={WelcomeScreen}/>
          <Route exact path='/questions/:id' component={Questions} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
