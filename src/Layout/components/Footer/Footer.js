import React from 'react';
import styled from 'styled-components';
import { darkPrimary, textLight, flexCenter } from 'utilities';

const Footer = () => (
  <StyledFooter>
    {'Copyright by Andrzej Kruk 2019'}
  </StyledFooter>
);

const StyledFooter = styled.div`
  ${flexCenter()};

  height: 120px;
  width: 100%;
  background-color: ${darkPrimary};
  color: ${textLight};
  font-size: .75rem;
`;

export default Footer;