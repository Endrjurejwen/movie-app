import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { spacing } from 'utilities';

import MovieCard from 'Movies/components/MovieCard/MovieCard';

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
  padding: ${spacing[5]};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: ${spacing[4]};
`;

export default withRouter(MoviesGrid);