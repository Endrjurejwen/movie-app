import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem/NavigationItem';

const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/' },
  { name: 'Favorites', path: '/' },
  { name: 'Contact', path: '/' },
];

const navigationItems = ({ closeMenu }) => (
  <StyledNav>
    <NavigationList>
      {NAVIGATION_ITEMS.map(item => (
        <NavigationItem key={item} name={item.name} closeMenu={closeMenu} />
      ))}
    </NavigationList>
  </StyledNav>
);

navigationItems.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

const StyledNav = styled.nav`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export default navigationItems;