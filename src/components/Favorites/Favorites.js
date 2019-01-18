import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoviesGrid from '../Movies/MoviesGrid/MoviesGrid';

import { removeFromFavorites, checkIfFavorites } from '../Movies/actions';

class Favorites extends Component {
  static propTypes = {
    favoritesMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    checkIfFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
    isMoviesChecked: PropTypes.bool.isRequired,
  }

  componentDidUpdate = () => {
    const {
      checkIfFavorites, movies, favoritesMovies, isMoviesChecked,
    } = this.props;
    if (!isMoviesChecked) {
      checkIfFavorites(movies, favoritesMovies);
    }
  }

  removeFromFavoritesHandler = (id) => {
    const { favoritesMovies, removeFromFavorites } = this.props;
    const favoriteMovie = favoritesMovies.find(movie => movie.id === id);
    removeFromFavorites(favoriteMovie);
  }

  render() {
    const { favoritesMovies } = this.props;
    return (
      <>
        <h1
          style={{
            padding: '40px 0', fontSize: '35px', textTransform: 'uppercase', color: '#333',
          }}
        >
          {'Your Favorites Movies'}
        </h1>
        <MoviesGrid movies={favoritesMovies} remove={this.removeFromFavoritesHandler} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  favoritesMovies: state.movies.favoritesMovies,
  movies: state.movies.movies,
  isMoviesChecked: state.movies.isMoviesChecked,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  removeFromFavorites,
  checkIfFavorites,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);