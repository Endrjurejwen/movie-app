import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import media from '../../../../utilities/media';

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
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;

  ${media.tablet`
    padding: 0 10px;
    height: 100%;
  `}
`;

const Link = styled(NavLink)`
  text-transform: uppercase;
  padding: 20px;
  font-size: 18px;
  background-color: transparent;
  display: block;
  width: 100%;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  height: 100%;
  transition: color .2s;

  &:hover,
  &:focus {
    color: pink;
  }

  ${media.tablet`
    font-size: 16px;
    background-color: transparent;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: 2px solid #fff;
    }

    &:hover {
      color: pink;
      border-bottom: 2px solid #fff;
    }
  `}
`;

export default navigationItem;