import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import logoWhite from 'assets/images/logo-white.png';

const logo = ({ height }) => (
  <Image height={height} src={logoWhite} alt="Movie Lovers Logo" />
);

logo.propTypes = {
  height: PropTypes.string.isRequired,
};

const Image = styled.img`
  max-height: ${({ height }) => (height)}
`;

export default logo;