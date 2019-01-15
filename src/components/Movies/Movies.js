import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovies } from './actions';
import MovieCard from './MovieCard/MovieCard';

class Movies extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    getMovies: PropTypes.func.isRequired,
    isMoviesLoaded: PropTypes.bool.isRequired,
    history: PropTypes.shape().isRequired,
  }

  componentDidMount = () => {
    const { getMovies, isMoviesLoaded } = this.props;
    if (!isMoviesLoaded) {
      getMovies();
    }
  }

  toMovieDetailsHandler = (id) => {
    const { history } = this.props;
    history.push(`/movies/${id}`);
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
        <MoviesGrid>
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              date={movie.release_date}
              bgImage={`https://image.tmdb.org/t/p/w500/${
                movie.backdrop_path
              }`}
              readMore={() => this.toMovieDetailsHandler(movie.id)}
            />
          ))}
        </MoviesGrid>
      </>
    );
  }
}

const MoviesGrid = styled.main`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 30px;
`;

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isMoviesLoaded: state.movies.isMoviesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movies);