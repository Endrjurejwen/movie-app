import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from '../utilities/media';

const menuButton = ({ toggleMenu, isOpen }) => (
  <StyledButton onClick={toggleMenu}>
    <MenuIcon isOpen={isOpen} />
  </StyledButton>
);

menuButton.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const StyledButton = styled.button`
  display: block;
  z-index: 40;
  cursor: pointer;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0 15px;

  ${media.tablet`
    display: none;
  `}
`;

const MenuIcon = styled.div`
  position: relative;
  background-color: ${({ isOpen }) => (isOpen ? 'transparent' : '#fff')};
  width: 22px;
  height: 2px;

  &::before, &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 22px;
    height: 2px;
    left: 0;
    transition: transform .2s ease-out;
  }

  &::before {
    top: ${({ isOpen }) => (isOpen ? '0' : '-6px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(135deg)' : 'rotate(0deg)')};
  }

  &::after {
    top: ${({ isOpen }) => (isOpen ? '0' : '6px')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'rotate(0deg)')};
  }
`;

export default menuButton;