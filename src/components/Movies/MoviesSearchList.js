import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesGrid from './MoviesGrid/MoviesGrid';

const moviesSearchList = ({ moviesSearchList }) => (
  <>
    <h1
      style={{
        padding: '40px 0', fontSize: '35px', textTransform: 'uppercase', color: '#333',
      }}
    >
      {'Your Results'}
    </h1>
    <MoviesGrid movies={moviesSearchList} />
  </>
);

moviesSearchList.propTypes = {
  moviesSearchList: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
  moviesSearchList: state.movies.moviesSearchList,
});

export default connect(mapStateToProps)(moviesSearchList);