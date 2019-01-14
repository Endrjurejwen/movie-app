import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import MenuButton from '../../elements/MenuButton';
import SideDrawer from './SideDrawer/SideDrawer';
import NavigationItems from './NavigationItems/NavigationItems';
import Backdrop from '../../elements/Backdrop';
import SearchBar from './SearchBar/SearchBar';
import Logo from '../../utilities/Logo';

import { toggleMenu } from '../../actions';

class Navigation extends Component {
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
    const { menuOpen, toggleMenu } = this.props;
    return (
      <NavContainer>
        <MenuButton toggleMenu={toggleMenu} open={menuOpen} />
        <SideDrawer open={menuOpen} closeMenu={toggleMenu} />
        {menuOpen && <Backdrop close={toggleMenu} />}
        <Logo height="50%" />
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

const mapStateToProps = state => ({
  menuOpen: state.menu.menuOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMenu,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));