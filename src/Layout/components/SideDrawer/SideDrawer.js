import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../utilities/Logo';

const sideDrawer = ({ isOpen, closeMenu }) => (
  <Container isOpen={isOpen}>
    <StyledHeader>
      <h2>Movie Lovers</h2>
      <Logo height="15%" />
    </StyledHeader>
    <NavigationItems closeMenu={closeMenu} />
    <StyledFooter>
      <p>Social Media Icons</p>
    </StyledFooter>
  </Container>
);

sideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 4fr 1fr;
  grid-row-gap: 15px;
  padding: 10px 30px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80vw;
  z-index: 30;
  background-color: rgba(59, 33, 112, .95);
  color: #fff;
  box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.24);

  transition: all 0.2s cubic-bezier(0.63, 0.21, 0.66, 1);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100vw)')};
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #fff;
`;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #fff;
`;

export default sideDrawer;