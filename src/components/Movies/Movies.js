import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovies } from './actions';
import MoviesGrid from './MoviesGrid/MoviesGrid';

import { addToFavorites } from '../Favorites/actions';

class Movies extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    getMovies: PropTypes.func.isRequired,
    isMoviesLoaded: PropTypes.bool.isRequired,
  }

  componentDidMount = () => {
    const { getMovies, isMoviesLoaded } = this.props;
    if (!isMoviesLoaded) {
      getMovies();
    }
  }

  addToFavoritesHandler = (id) => {
    const { movies, addToFavorites } = this.props;
    const favoriteMovie = movies.find(movie => movie.id === id);
    addToFavorites(favoriteMovie);
    console.log(id);
  }

  render() {
    const { movies } = this.props;
    return (
      <>
        <h1
          style={{
            padding: '40px 0', fontSize: '35px', textTransform: 'uppercase', color: '#333',
          }}
        >
          {'Top 20 New Movies'}
        </h1>
        <MoviesGrid movies={movies} addOrRemoveFavorite={this.addToFavoritesHandler} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isMoviesLoaded: state.movies.isMoviesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
  addToFavorites,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movies);