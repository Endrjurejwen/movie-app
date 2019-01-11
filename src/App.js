/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import './App.css';

import Navigation from './Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Hello from the other side!!</h1>
      </div>
    );
  }
}

export default App;
