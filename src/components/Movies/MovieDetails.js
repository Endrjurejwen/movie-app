import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getMovie,
  resetMovie,
  checkIfFavorite,
  checkIfFavorites,
  removeFromFavorites,
  addToFavorites,
} from './actions';

import media from '../../utilities/media';
import Icon from '../../utilities/icon';

class MovieDetails extends Component {
  static propTypes = {
    getMovie: PropTypes.func.isRequired,
    resetMovie: PropTypes.func.isRequired,
    movie: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
    isMovieChecked: PropTypes.bool.isRequired,
    checkIfFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    checkIfFavorites: PropTypes.func.isRequired,
    isMoviesChecked: PropTypes.bool.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    const { getMovie, match } = this.props;
    const id = match.params.movie_id;
    getMovie(id);
  }

  componentDidUpdate = () => {
    const {
      isMovieChecked, checkIfFavorite, movie, favorites,
    } = this.props;
    if (!isMovieChecked) {
      checkIfFavorite(movie, favorites);
    }
  }

  componentWillUnmount = () => {
    const {
      resetMovie, movies, favorites, checkIfFavorites, isMoviesChecked,
    } = this.props;
    resetMovie();
    if (!isMoviesChecked) {
      checkIfFavorites(movies, favorites);
    }
  }

  render() {
    const { movie, addToFavorites, removeFromFavorites } = this.props;
    return (
      <MovieGrid>
        <Title>{movie.title}</Title>
        <Background
          backgroundImage={`https://image.tmdb.org/t/p/w500/${
            movie.backdrop_path
          }`}
        />
        <DetailsContainer>
          <p>{movie.overview}</p>
          <LoveButton
            onClick={movie.isFavorite
              ? (() => removeFromFavorites(movie))
              : (() => addToFavorites(movie))}
            type="button"
          >
            <Icon
              name={movie.isFavorite ? 'fullLove' : 'love'}
              width="60px"
              height="60px"
              color="#5E35B1"
            />
          </LoveButton>
        </DetailsContainer>

      </MovieGrid>
    );
  }
}

const MovieGrid = styled.div`
  padding: 30px 0;
  display: grid;
  grid-row-gap: 30px;
  grid-template-columns: 20px 1fr 1fr 20px;

  ${media.phone`
    grid-template-columns: 50px 3fr 2fr 50px;
    grid-gap: 50px;
  `}
`;

const Title = styled.h1`
  grid-column: 2 / 4;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  grid-column: 2 / 4;
  align-self: stretch;
  text-align: left;

  ${media.tablet`
    font-size: 18px;  
    grid-column: 3 / 4;
    align-self: stretch;
  `}
`;

const Background = styled.div`
  grid-column: 1 / -1;
  height: 200px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet`
    height: 500px;
    grid-column: 1 / 3;
  `}
`;

const LoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = state => ({
  movie: state.movies.movie,
  movies: state.movies.movies,
  favorites: state.movies.favoritesMovies,
  isMoviesLoaded: state.movies.isMoviesLoaded,
  isMovieChecked: state.movies.isMovieChecked,
  isMoviesChecked: state.movies.isMoviesChecked,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovie,
  resetMovie,
  checkIfFavorite,
  removeFromFavorites,
  addToFavorites,
  checkIfFavorites,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);