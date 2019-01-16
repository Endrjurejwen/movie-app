import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearchMovies } from '../../Movies/actions';

import Icon from '../../../utilities/icon';
import media from '../../../utilities/media';

const searchBar = ({
  click, change, text, submit,
}) => (
  <StyledForm onSubmit={submit}>
    <StyledLabel htmlFor="search">
      {'Search: '}
    </StyledLabel>
    <StyledInput onChange={change} type="text" id="search" name="search" value={text} placeholder="Search..." />
    <StyledCloseButton onClick={click} type="reset" className="btn--close">
      <Icon
        name="close"
        width="14px"
        height="12px"
        color="#fff"
      />
    </StyledCloseButton>
    <StyledSearchButton className="btn--search" type="submit">
      <Icon
        width="14px"
        height="14px"
        color="#5E35B1"
        name="search"
      />
    </StyledSearchButton>
  </StyledForm>
);

searchBar.propTypes = {
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  text: PropTypes.string,
};

searchBar.defaultProps = {
  text: '',
};

const StyledForm = styled.form`
  margin: 0 20px; // refactor: maybe change container to grid to manipulate grid-row-gap and width

  position: relative;
  width: 100%;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: #673AB7;

  &:focus-within {
    border: none;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 50;
    margin: 0;

    .btn--close {
      display: flex;
    }

    .btn--search {
        width: 60px;
      }
  }

  ${media.tablet`
    max-width: 30%;

    &:focus-within {
      position: relative;
      border: 1px solid #fff;
      height: auto;

      .btn--search {
        width: 40px;
      }
    }
  `}
`;

const StyledLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const StyledInput = styled.input`
  width: 70%;
  border: none;
  font-size: inherit;
  background-color: transparent;
  color: inherit;
  outline: none; // check whether it doesn't interfere web accessing (ARIA)
  
  &::placeholder {
    color: inherit;
  }

  ${media.tablet`
    width: 84%;
  `}
`;

const StyledSearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40px;
  background-color: #fff;
  border: none;
  border-left: 1px solid #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;


/* REFACTOR - create element = buttonIcon */
const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 65px;
  height: 100%;
  width: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    right: 45px;
  `}
`;

const mapDispatchToProps = dispatch => bindActionCreators({
  getSearchMovies,
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(searchBar));