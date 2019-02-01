import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Logo, H2 } from 'elements';
import {
  textLight,
  sideDrawerBackground,
  fixed,
  flexCenter,
  elevation,
  spacing,
} from 'utilities';

import NavigationItems from 'Layout/components/NavigationItems/NavigationItems';

const sideDrawer = ({ isOpen, closeMenu }) => (
  <Container isOpen={isOpen}>
    <StyledHeader>
      <Title>Movie Lovers</Title>
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
  ${fixed()};
  ${elevation[3]};

  display: grid;
  grid-template-rows: 2fr 4fr 1fr;
  grid-row-gap: ${spacing[3]};
  padding: ${spacing[2]} ${spacing[4]};
  height: 100vh;
  width: 80vw;
  z-index: 30;
  background-color: ${sideDrawerBackground};
  color: ${textLight};
  text-align: center;

  transition: all 0.2s cubic-bezier(0.63, 0.21, 0.66, 1);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100vw)')};
`;

const Title = styled(H2)`
  color: ${textLight};
`;

const StyledHeader = styled.header`
  ${flexCenter({ justifyContent: 'space-evenly' })};

  border-bottom: 1px solid ${textLight};
`;

const StyledFooter = styled.footer`
  ${flexCenter()};

  border-top: 1px solid ${textLight};
`;

export default sideDrawer;