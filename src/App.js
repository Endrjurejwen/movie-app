/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/movies" component={Movies} />
              <Redirect exact from="/" to="/home" />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
