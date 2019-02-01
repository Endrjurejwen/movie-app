import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <StyledFooter>
    {'Copyright by Andrzej Kruk 2019'}
  </StyledFooter>
);

const StyledFooter = styled.div`
  height: 120px;
  width: 100%;
  background-color: #3e2280;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export default Footer;