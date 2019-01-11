import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const navigationItem = ({ name, path, closeMenu }) => (
  <NavItem>
    <Link onClick={closeMenu} href={path}>{name}</Link>
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
`;

const Link = styled.a`
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

`;

export default navigationItem;