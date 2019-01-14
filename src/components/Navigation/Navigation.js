import React, { Component } from 'react';
import styled from 'styled-components';

import MenuButton from '../../elements/MenuButton';
import Toggle from '../../utilities/Toggle';
import SideDrawer from './SideDrawer/SideDrawer';
import NavigationItems from './NavigationItems/NavigationItems';
import Backdrop from '../../elements/Backdrop';
import SearchBar from './SearchBar/SearchBar';

export default class Navigation extends Component {
  state = {
    searchText: '',
  }

  InputChangeHandler = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  FocusOnInputHandler = (event) => {
    const input = event.target.closest('button').previousSibling;
    input.focus();
    // event.target.closest('button').blur();
  }

  render() {
    return (
      <NavContainer>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <MenuButton toggleMenu={toggle} open={on} />
              <SideDrawer open={on} closeMenu={toggle} />
              {on && <Backdrop close={toggle} />}
            </>
          )}
        </Toggle>
        <div>Logo</div>
        <SearchBar click={this.FocusOnInputHandler} change={this.InputChangeHandler} />
        <NavigationItems desktop />
      </NavContainer>
    );
  }
}

const NavContainer = styled.div`
  color: #fff;
  background-color: #5E35B1;
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