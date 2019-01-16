import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovie, resetMovie } from './actions';
import media from '../../utilities/media';

class MovieDetails extends Component {
  static propTypes = {
    getMovie: PropTypes.func.isRequired,
    resetMovie: PropTypes.func.isRequired,
    movie: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
  }

  componentDidMount = () => {
    const { getMovie, match } = this.props;
    getMovie(match.params.movie_id);
  }

  componentWillUnmount = () => {
    const { resetMovie } = this.props;
    resetMovie();
  }

  render() {
    const { movie } = this.props;
    return (
      <MovieGrid>
        <Title>{movie.title}</Title>
        <Background
          backgroundImage={`https://image.tmdb.org/t/p/w500/${
            movie.backdrop_path
          }`}
        />
        <Description>{movie.overview}</Description>
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

const Description = styled.p`
  grid-column: 2 / 4;
  text-align: left;

  ${media.tablet`
    font-size: 18px;  
    grid-column: 3 / 4;
    align-self: center;
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

const mapStateToProps = state => ({
  movie: state.movies.movie,
  isMoviesLoaded: state.movies.isMoviesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovie,
  resetMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);