import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../../../utilities/icon';
import media from '../../../utilities/media';

const searchBar = () => (
  <StyledForm>
    <StyledLabel htmlFor="search">
      {'Search: '}
    </StyledLabel>
    <StyledInput type="text" id="search" name="search" placeholder="Search..." />
    <StyledButton type="submit"><Icon width="14px" height="14px" color="#5E35B1" name="search" /></StyledButton>
  </StyledForm>
);

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
  }

  ${media.tablet`
    max-width: 30%;

    &:focus-within {
      position: relative;
      border: 1px solid #fff;
      height: auto;
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
  width: 90%;
  border: none;
  font-size: inherit;
  background-color: transparent;
  color: inherit;
  outline: none; // check whether it doesn't interfere web accessing (ARIA)
  
  &::placeholder {
    color: inherit;
  }
`;

const StyledButton = styled.button`
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

export default searchBar;