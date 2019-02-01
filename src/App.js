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

import Layout from './Layout/components/Layout/Layout';
import Home from './Home/components/Home/Home';
import Movies from './Movies/containers/Movies/Movies';
import MovieDetails from './Movies/containers/MovieDetails/MovieDetails';
import MovieSearchList from './Movies/containers/MoviesSearchList/MoviesSearchList';
import Favorites from './Movies/containers/Favorites/Favorites';

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
                <Route path="/search" component={MovieSearchList} />
                <Route exact path="/favorites" component={Favorites} />
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
