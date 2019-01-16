import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieCard from './MovieCard/MovieCard';

class MoviesSearchList extends Component {
  toMovieDetailsHandler = (id) => {
    const { history } = this.props;
    history.push(`/movies/${id}`);
  }

  render() {
    const { moviesSearchList } = this.props;
    return (
      <>
        <h1
          style={{
            padding: '40px 0', fontSize: '35px', textTransform: 'uppercase', color: '#333',
          }}
        >
          {'Your Results'}
        </h1>
        <MoviesGrid>
          {moviesSearchList.map(movie => (
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
  moviesSearchList: state.movies.moviesSearchList,
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchList);