import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getMovies, checkIfFavorites, addToFavorites, removeFromFavorites,
} from './actions';
import MoviesGrid from './MoviesGrid/MoviesGrid';

class Movies extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    getMovies: PropTypes.func.isRequired,
    isMoviesLoaded: PropTypes.bool.isRequired,
    checkIfFavorites: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
    isMoviesChecked: PropTypes.bool.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    const {
      getMovies, isMoviesLoaded,
    } = this.props;
    if (!isMoviesLoaded) {
      getMovies();
    }
  }

  componentDidUpdate = () => {
    const {
      checkIfFavorites, movies, favorites, isMoviesChecked,
    } = this.props;
    if (!isMoviesChecked) {
      checkIfFavorites(movies, favorites);
    }
  }

  addToFavoritesHandler = (id) => {
    const { movies, addToFavorites } = this.props;
    const favoriteMovie = movies.find(movie => movie.id === id);
    addToFavorites(favoriteMovie);
    console.log(id);
  }

  removeFromFavoritesHandler = (id) => {
    const { movies, removeFromFavorites } = this.props;
    const favoriteMovie = movies.find(movie => movie.id === id);
    removeFromFavorites(favoriteMovie);
  }

  render() {
    const {
      movies,
    } = this.props;
    return (
      <>
        <h1
          style={{
            padding: '40px 0', fontSize: '35px', textTransform: 'uppercase', color: '#333',
          }}
        >
          {'Top 20 New Movies'}
        </h1>
        <MoviesGrid
          movies={movies}
          add={this.addToFavoritesHandler}
          remove={this.removeFromFavoritesHandler}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isMoviesLoaded: state.movies.isMoviesLoaded,
  favorites: state.movies.favoritesMovies,
  isMoviesChecked: state.movies.isMoviesChecked,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
  checkIfFavorites,
  addToFavorites,
  removeFromFavorites,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movies);