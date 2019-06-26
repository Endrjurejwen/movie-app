import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {
  media, textLight, linkHover, flexCenter, spacing,
} from 'utilities';

const navigationItem = ({
  name, path, closeMenu,
}) => (
  <NavItem>
    <Link onClick={closeMenu} to={path}>{name}</Link>
  </NavItem>
);

navigationItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  closeMenu: PropTypes.func.isRequired,
};

navigationItem.defaultProps = {
  name: 'Link',
  path: '/',
};

const NavItem = styled.li`
  ${flexCenter()};
  
  background-color: transparent;
  width: 75%;

  ${media.tablet`
    padding: 0 ${spacing[2]};
    height: 100%;
  `}
`;

const Link = styled(NavLink)`
  text-transform: uppercase;
  padding: ${spacing[2]};
  font-size: 1.4rem;
  background-color: transparent;
  display: block;
  width: 100%;
  text-decoration: none;
  color: ${textLight};
  cursor: pointer;
  height: 100%;
  transition: color .2s;

  &:hover,
  &:focus {
    color: ${linkHover};
  }

  ${media.tablet`
    ${flexCenter()};

    font-size: 1rem;
    background-color: transparent;
    /* height: 100%; */
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: 2px solid ${textLight};
    }

    &:hover {
      color: pink;
      border-bottom: 2px solid ${textLight};
    }
  `}
`;

export default navigationItem;