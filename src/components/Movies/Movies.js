import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import MovieCard from './MovieCard/MovieCard';

export default class Movies extends Component {
  state = {
    movies: [],
  }

  componentDidMount = () => {
    this.loadMovies();
  }

  loadMovies = async () => {
    const res = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=2ea6c981e89421d18fb325f98b6c4e46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    );
    this.setState({ movies: res.data.results });
  }

  render() {
    const { movies } = this.state;
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