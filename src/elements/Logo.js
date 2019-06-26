import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logoWhite from 'assets/images/logo-white.png';

const logo = ({ height }) => (
  <Link to="/home">
    <Image height={height} src={logoWhite} alt="Movie Lovers Logo" />
  </Link>
);

logo.propTypes = {
  height: PropTypes.string.isRequired,
};

const Image = styled.img`
  max-height: ${({ height }) => (height)};
`;

const Link = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default logo;