import React from 'react';
import styled from 'styled-components';

const navigationItems = () => (
  <StyledNav>
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  </StyledNav>
);

const StyledNav = styled.nav`
  background-color: pink;
  width: 100%;
  height: 100%;
`;

export default navigationItems;