import React from 'react';
import styled from 'styled-components';

import MenuButton from '../../elements/MenuButton';
import Toggle from '../../utilities/Toggle';

const navigation = () => (
  <NavContainer>
    <Toggle>
      {({ on, toggle }) => (
        <>
          <MenuButton toggleMenu={toggle} open={on} />
        </>
      )}
    </Toggle>
    <div>Navigation list</div>
  </NavContainer>
);

const NavContainer = styled.div`
  color: #fff;
  background-color: purple;
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .14), 0 3px 6px rgba(0, 0, 0, .24);
`;

export default navigation;