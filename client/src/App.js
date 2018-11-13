import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeScreen from './containers/WelcomeScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/quiz' component={WelcomeScreen}/>

      </Router>
    );
  }
}

export default App;
