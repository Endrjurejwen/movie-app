import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { media, flexCenter, spacing } from 'utilities';
import {
  Icon, ButtonIcon, H1, H3,
} from 'elements';

import {
  getMovie,
  resetMovie,
  checkIfFavorite,
  checkIfFavorites,
  removeFromFavorites,
  addToFavorites,
} from 'Movies/actions';

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
          <OverviewTitle>Overview</OverviewTitle>
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
  padding: ${spacing[4]} 0;
  display: grid;
  grid-row-gap: ${spacing[4]}
  grid-template-columns: ${spacing[3]} 1fr 1fr ${spacing[3]};

  ${media.phone`
    grid-template-columns: ${spacing[6]} 3fr 2fr ${spacing[6]};
    grid-gap: ${spacing[6]};
  `}
`;

const Title = styled(H1)`
  grid-column: 2 / 4;
  text-align: center;
  margin-top: ${spacing[4]}
`;

const DetailsContainer = styled.div`
  ${flexCenter({ justifyContent: 'space-around', alignItems: 'flex-start' })}

  flex-direction: column;
  grid-column: 2 / 4;
  text-align: left;

  ${media.tablet`
    font-size: 18px;  
    grid-column: 3 / 4;
    align-self: stretch;
  `}
`;

const OverviewTitle = styled(H3)`
  align-self: center;
  margin-bottom: ${spacing[3]};
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

const LoveButton = styled(ButtonIcon)`
  position: relative;
  align-self: center;
  margin: ${spacing[4]} 0;
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