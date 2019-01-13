import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from '../utilities/media';

const menuButton = ({ toggleMenu, open }) => (
  <StyledButton onClick={toggleMenu}>
    <MenuIcon open={open} />
  </StyledButton>
);

menuButton.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
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
  background-color: ${({ open }) => (open ? 'transparent' : '#fff')};
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
    top: ${({ open }) => (open ? '0' : '-6px')};
    transform: ${({ open }) => (open ? 'rotate(135deg)' : 'rotate(0deg)')};
  }

  &::after {
    top: ${({ open }) => (open ? '0' : '6px')};
    transform: ${({ open }) => (open ? 'rotate(-135deg)' : 'rotate(0deg)')};
  }
`;

export default menuButton;