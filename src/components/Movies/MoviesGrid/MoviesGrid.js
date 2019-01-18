import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

const MoviesGrid = ({
  movies, history, add, remove,
}) => {
  const toMovieDetailsHandler = (id) => {
    history.push(`/movies/${id}`);
  };

  return (
    <GridWrapper>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          date={movie.release_date}
          bgImage={`https://image.tmdb.org/t/p/w500/${
            movie.backdrop_path
          }`}
          readMore={() => toMovieDetailsHandler(movie.id)}
          addOrRemoveFavorite={movie.isFavorite ? () => remove(movie.id) : () => add(movie.id)}
          iconName={movie.isFavorite ? 'fullLove' : 'love'}
        />
      ))}
    </GridWrapper>
  );
};

MoviesGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape().isRequired,
  add: PropTypes.func,
  remove: PropTypes.func.isRequired,
};

MoviesGrid.defaultProps = {
  add: () => this.props.movies,
};

const GridWrapper = styled.main`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 30px;
`;

export default withRouter(MoviesGrid);