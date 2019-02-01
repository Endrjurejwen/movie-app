import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { H1 } from 'elements';
import { spacing } from 'utilities';

import MoviesGrid from 'Movies/components/MoviesGrid/MoviesGrid';
import {
  getMovies,
  checkIfFavorites,
  addToFavorites,
  removeFromFavorites,
  getSearchMovies,
} from 'Movies/actions';


class moviesSearchList extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    getSearchMovies: PropTypes.func.isRequired,
    isMoviesSearchListLoaded: PropTypes.bool.isRequired,
    checkIfFavorites: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
    isMoviesChecked: PropTypes.bool.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
    location: PropTypes.shape().isRequired,
  }

  componentDidMount = () => {
    const { location, getSearchMovies, isMoviesSearchListLoaded } = this.props;

    const query = location.search.substring(1);
    if (!isMoviesSearchListLoaded) {
      getSearchMovies(query);
    }
  }

  componentDidUpdate = () => {
    const {
      checkIfFavorites,
      movies,
      favorites,
      isMoviesChecked,
      location,
      isMoviesSearchListLoaded,
      getSearchMovies,
    } = this.props;

    const query = location.search.substring(1);
    if (!isMoviesSearchListLoaded) {
      getSearchMovies(query);
    }

    if (!isMoviesChecked) {
      checkIfFavorites(movies, favorites);
    }
  }

  addToFavoritesHandler = (id) => {
    const { movies, addToFavorites } = this.props;
    const favoriteMovie = movies.find(movie => movie.id === id);
    addToFavorites(favoriteMovie);
  }

  removeFromFavoritesHandler = (id) => {
    const { movies, removeFromFavorites } = this.props;
    const favoriteMovie = movies.find(movie => movie.id === id);
    removeFromFavorites(favoriteMovie);
  }

  render() {
    const { movies } = this.props;
    return (
      <>
        <Title>Your Search Movies</Title>
        <MoviesGrid
          movies={movies}
          add={this.addToFavoritesHandler}
          remove={this.removeFromFavoritesHandler}
        />
      </>
    );
  }
}

const Title = styled(H1)`
  text-align: center;
  margin-top: ${spacing[6]};
`;

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isMoviesLoaded: state.movies.isMoviesLoaded,
  favorites: state.movies.favoritesMovies,
  isMoviesChecked: state.movies.isMoviesChecked,
  moviesSearchList: state.movies.moviesSearchList,
  isMoviesSearchListLoaded: state.movies.isMoviesSearchListLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
  checkIfFavorites,
  addToFavorites,
  removeFromFavorites,
  getSearchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(moviesSearchList);