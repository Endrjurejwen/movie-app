/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/Movies/MovieDetails';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Layout>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/movies" component={Movies} />
                <Route path="/movies/:movie_id" component={MovieDetails} />
                <Redirect exact from="/" to="/home" />
              </Switch>
            </Layout>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
