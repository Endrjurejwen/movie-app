import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesGrid from '../Movies/MoviesGrid/MoviesGrid';

const favorites = ({ favoritesMovies }) => (
  <>
    <h1
      style={{
        padding: '40px 0', fontSize: '35px', textTransform: 'uppercase', color: '#333',
      }}
    >
      {'Your Favorites Movies'}
    </h1>
    <MoviesGrid movies={favoritesMovies} />
  </>
);

favorites.propTypes = {
  favoritesMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
  favoritesMovies: state.favorites.favoritesMovies,
});

export default connect(mapStateToProps)(favorites);