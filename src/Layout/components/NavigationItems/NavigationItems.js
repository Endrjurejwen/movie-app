import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'utilities';

import NavigationItem from './NavigationItem/NavigationItem';

const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/home' },
  { name: 'Movies', path: '/movies' },
  { name: 'Favorites', path: '/favorites' },
];

const navigationItems = ({ closeMenu, desktop }) => (
  <StyledNav desktop={desktop}>
    <NavigationList>
      {NAVIGATION_ITEMS.map(item => (
        <NavigationItem key={item.name} name={item.name} path={item.path} closeMenu={closeMenu} />
      ))}
    </NavigationList>
  </StyledNav>
);

navigationItems.propTypes = {
  closeMenu: PropTypes.func,
  desktop: PropTypes.bool,
};

navigationItems.defaultProps = {
  closeMenu: () => null,
  desktop: false,
};

const StyledNav = styled.nav`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: ${({ desktop }) => (desktop ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  ${media.tablet`
    display: flex;
    width: auto;
  `}
`;

const NavigationList = styled.ul`
  list-style: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;

  ${media.tablet`
    flex-flow: row;
    justify-content: space-between;
  `}
`;

export default navigationItems;