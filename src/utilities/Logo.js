import React from 'react';
import styled from 'styled-components';

import logoWhite from '../assets/images/logo-white.png';

const logo = ({ height }) => (
  <Image height={height} src={logoWhite} alt="Movie Lovers Logo" />
);

const Image = styled.img`
  max-height: ${({ height }) => (height)}
`;

export default logo;