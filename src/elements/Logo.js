import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import logoWhite from 'assets/images/logo-white.png';

const logo = ({ height, onClick }) => (
  <Image role="button" height={height} src={logoWhite} alt="Movie Lovers Logo" onClick={onClick} />
);

logo.propTypes = {
  height: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

logo.defaultProps = {
  onClick: () => null,
};

const Image = styled.img`
  max-height: ${({ height }) => (height)};
  cursor: pointer;
`;

export default logo;